import { FormEntitySelect3 } from "@/components/forms/form-select/FormEntitySelect3";
import { FormSelect3 } from "@/components/forms/form-select/FormSelect3";
import { uuidv4 } from "@/helpers/api";
import { DeepPartial } from "@/hooks/mock-tools";
import { useT } from "@/hooks/useT";
import {
  ControlSheetObjects,
  ControlSheetObjectsConnections,
} from "@/sdk/esp-studio/modules/iot/ControlSheetEntity";
import {
  DataNodeEntity,
  DataNodeValues,
} from "@/sdk/esp-studio/modules/iot/DataNodeEntity";

import { useGetDataNodeByUniqueId } from "@/sdk/esp-studio/modules/iot/useGetDataNodeByUniqueId";
import { useGetDataNodes } from "@/sdk/esp-studio/modules/iot/useGetDataNodes";
import { useQueryClient } from "react-query";
import { useReactFlow } from "reactflow";
import { DiagramNodeProps } from "./diagramTools";
import { HandleRender } from "./HandleRender";
import { NodeWrapper } from "./NodeWrapper";
import { SourceTargetInsert } from "./SourceTargetInsert";

export function DataNodeRelay(props: DiagramNodeProps) {
  let startPoint = 63;

  const t = useT();

  const { setNodes } = useReactFlow();
  const queryClient = useQueryClient();

  const { query } = useGetDataNodeByUniqueId({
    queryClient,
    query: {
      uniqueId: props.data.meta?.nodeId,
    },
  });

  const append = (type: "source" | "target") => {
    setNodes((nodes) =>
      nodes.map((node) => {
        if (node.id === props.id) {
          return {
            ...node,
            data: {
              ...node.data,
              connections: [
                ...(node.data?.connections || []),
                {
                  type,
                  uniqueId: uuidv4(),
                },
              ],
            },
          };
        }
        return node;
      })
    );
  };

  const remove = (index: number) => {
    setNodes((nodes) =>
      nodes.map((node) => {
        if (node.id === props.id) {
          return {
            ...node,
            data: {
              ...node.data,
              connections: (node.data?.connections || []).filter(
                (_, i) => i !== index
              ),
            },
          };
        }
        return node;
      })
    );
  };

  const updateData = (data) => {
    setNodes((nodes) =>
      nodes.map((node) => {
        if (node.id === props.id) {
          return {
            ...node,
            data: {
              ...node.data,
              meta: data,
            },
          };
        }
        return node;
      })
    );
  };

  const update = (data, index: number) => {
    setNodes((nodes) =>
      nodes.map((node) => {
        if (node.id === props.id) {
          return {
            ...node,
            data: {
              ...node.data,
              connections: (node.data?.connections || []).map((v, i) => {
                if (i === index) {
                  v.data = { ...(v.data || {}), ...(data || {}) };
                }

                return v;
              }),
            },
          };
        }
        return node;
      })
    );
  };

  return (
    <NodeWrapper>
      <SourceTargetInsert reverse={false} append={append} />
      <FormEntitySelect3
        useQuery={useGetDataNodes}
        label={"Data Node"}
        value={props.data?.meta?.nodeId}
        onChange={(v) => {
          updateData({ nodeId: v?.uniqueId });
        }}
      />

      {(props.data?.connections || []).map((connection, index) => {
        startPoint += 85;
        return (
          <div key={index}>
            <FormSelect3
              fnLabelFormat={(l) => l.key}
              convertToNative
              onChange={(v: DataNodeValues) => {
                console.log(v);
                update({ subKey: v.uniqueId }, index);
              }}
              value={connection?.data?.subKey}
              options={query.data?.data?.values || []}
              label={"Sub node"}
            >
              <button className="node-remove" onClick={() => remove(index)}>
                X
              </button>
            </FormSelect3>
            <HandleRender startPoint={startPoint} connection={connection} />
          </div>
        );
      })}
    </NodeWrapper>
  );
}

DataNodeRelay.emptyGenerator = function (
  type: "source" | "target" | undefined
) {
  const id = uuidv4();
  let connections = [];

  if (type === "source") {
    connections.push({
      uniqueId: uuidv4(),
      data: {},
      type: "source",
    });
  }
  if (type === "target") {
    connections.push({
      uniqueId: uuidv4(),
      data: {},
      type: "target",
    });
  }
  if (!type) {
    connections = [
      {
        uniqueId: uuidv4(),
        data: {},
        type: "source",
      },
      {
        uniqueId: uuidv4(),
        data: {},
        type: "target",
      },
      {
        uniqueId: uuidv4(),
        data: {},
        type: "source",
      },
      {
        uniqueId: uuidv4(),
        data: {},
        type: "target",
      },
    ];
  }
  return {
    type: "dataNodeRelay",
    data: {
      connections,
    },
    id,
    uniqueId: id,
    positionAbsolute: {
      x: 59,
      y: 100,
    },
    position: { x: 50, y: 100 },
  } as DeepPartial<ControlSheetObjects>;
};
