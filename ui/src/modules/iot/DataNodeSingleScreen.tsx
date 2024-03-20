import { CommonSingleManager } from "@/components/entity-manager/CommonSingleManager";
import { GeneralEntityView } from "@/components/general-entity-view/GeneralEntityView";
import { usePageTitle } from "@/components/page-title/PageTitle";
import { useDatatableFiltering } from "@/hooks/useDatatableFiltering";
import { useLocale } from "@/hooks/useLocale";
import { useT } from "@/hooks/useT";
import { useRouter } from "@/Router";
import {
  DataNodeEntity,
  DataNodeValues,
} from "@/sdk/esp-studio/modules/iot/DataNodeEntity";
import { usePostDataNodeWrite } from "@/sdk/esp-studio/modules/iot/usePostDataNodeWrite";
import { useReactiveDataNodeReadfnByUniqueId } from "@/sdk/esp-studio/modules/iot/useReactiveDataNodeReadfnByUniqueId";
import { enTranslations } from "@/translations/en";
import { useEffect, useRef, useState } from "react";
import { useQueryClient } from "react-query";
import { useGetDataNodeByUniqueId } from "src/sdk/esp-studio/modules/iot/useGetDataNodeByUniqueId";
import { DataNodeValuesEntityManager } from "./DataNodeValuesEntityManager";

export const DataNodeSingleScreen = () => {
  const router = useRouter();
  const uniqueId = router.query.uniqueId as string;
  const { locale } = useLocale();

  const getSingleHook = useGetDataNodeByUniqueId({ query: { uniqueId } });
  var d: DataNodeEntity | undefined = getSingleHook.query.data?.data;

  useEffect(() => {}, [(d as any)?.values]);
  usePageTitle(d?.name || "");
  const t = useT();

  return (
    <>
      <CommonSingleManager
        editEntityHandler={() => {
          router.push(DataNodeEntity.Navigation.edit(uniqueId, locale));
        }}
        getSingleHook={getSingleHook}
      >
        <GeneralEntityView
          entity={d}
          fields={[
            {
              label: t.iot.dataNodeName,
              elem: <pre>{d?.name}</pre>,
            },
            {
              label: t.datanodes.dataType,
              elem: <pre>{d?.typeId}</pre>,
            },
            {
              label: t.datanodes.mode,
              elem: <pre>{d?.modeId}</pre>,
            },
          ]}
        />
        <br />
        <br />
      </CommonSingleManager>
      {/* <TestData dataNode={d} /> */}

      {d?.uniqueId && d?.readers?.length > 0 && (
        <NodeReaderPlayground node={d} />
      )}

      <pre>{JSON.stringify(d?.writers, null, 2)}</pre>
    </>
  );
};

type DataValues = {
  byList: Array<DataNodeValues>;
};

export const columns = (t: typeof enTranslations) => [
  {
    name: "key",
    title: "key",
    width: 200,
  },
  {
    name: "valueInt64",
    title: "valueInt64",
    width: 50,
  },
  {
    name: "actions",
    title: "Actions",
    width: 100,
  },
];

function NodeReaderDataValueArrayView({
  data,
  uniqueId,
  submit,
}: {
  data: DataValues;
  uniqueId: string;
  submit: any;
}) {
  const t = useT();
  const checkMap = useRef<any>({});
  const queryClient = useQueryClient();

  const udf = useDatatableFiltering({ urlMask: "" });

  // useEffect(() => {
  //   console.log(12, data);
  // }, [data]);

  return (
    <>
      <table className="table table-dark table-striped table-hover data-node-values-table">
        <thead>
          <tr>
            <th>Key</th>

            <th>Value</th>
            <th>R/W</th>

            {/* <th>Action</th> */}
          </tr>
        </thead>
        <tbody>
          {(data.byList || []).map((item) => {
            return (
              <tr key={item.key}>
                <td>{item.key}</td>

                <td>{item.value}</td>
                <td>
                  {item.readable ? " R " : ""} {item.writable ? " W " : ""}
                </td>

                {/* <td>
                  <button
                    onClick={() => {
                      const msg = {
                        key: item?.key,
                        uniqueId,
                        value: item.value === 1 ? false : true,
                      } as any;

                      submit(msg);
                    }}
                    className="btn btn-primary btn-sm"
                  >
                    Toggle
                  </button>
                </td> */}
              </tr>
            );
          })}
        </tbody>
      </table>
      <DataNodeValuesEntityManager />
    </>
  );
}

function onMessageComputedArray(
  msg: DataNodeValues,
  subKey: string,
  setSnapshot: any
) {
  if (typeof msg === "string") {
    msg = JSON.parse(msg);
  }

  if (!subKey) {
    return;
  }

  (setSnapshot as any)((s: DataValues) => {
    const byList = (s.byList || []).map((item) => {
      if (subKey === item.key) {
        return {
          key: item.key,
          value: msg,
        };
      }

      return item;
    });

    if (!byList.find((b) => b.key === subKey)) {
      byList.push({ key: subKey, value: msg });
    }

    return {
      byList,
    };
  });
}

function NodeReaderPlayground({ node }: { node: DataNodeEntity }) {
  const queryClient = useQueryClient();
  const { submit } = usePostDataNodeWrite({ queryClient });

  const [content, setContent] = useState("");
  const [snapshot, setSnapshot] = useState<DataValues>({
    byList: [],
  });

  const { data, operate, close, connected } =
    useReactiveDataNodeReadfnByUniqueId({
      presistResult: false,
      query: {
        uniqueId: node.uniqueId,
      },
      onMessage(msg) {
        try {
          msg = JSON.parse(msg);
        } catch (e) {}
        if (node.typeId === "string") {
          setContent((c) => c + msg.Content);
        }
        if (node.typeId === "computedValueArray") {
          onMessageComputedArray(msg.content, msg.subKey, setSnapshot);
        }
      },
    });

  useEffect(() => {
    setSnapshot((m) => {
      return {
        ...m,
        byList: (node as any).values,
      };
    });
  }, [(node as any).values]);

  useEffect(() => {
    operate({ phrase: "" });
    return () => close();
  }, []);

  return (
    <div>
      {node.typeId === "computedValueArray" && (
        <NodeReaderDataValueArrayView
          submit={submit}
          uniqueId={node.uniqueId}
          data={snapshot}
        />
      )}
      {node.typeId === "string" && <pre>{content}</pre>}
    </div>
  );
}
