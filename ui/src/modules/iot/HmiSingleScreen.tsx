import { CommonSingleManager } from "@/components/entity-manager/CommonSingleManager";
import { httpErrorHanlder } from "@/helpers/api";
import { useCommonEntityManager } from "@/hooks/useCommonEntityManager";
import { useT } from "@/hooks/useT";
import { useGetHmiByUniqueId } from "src/sdk/esp-studio/modules/iot/useGetHmiByUniqueId";

// @ts-ignore
import { useActions, useNewAction } from "@/components/action-menu/ActionMenu";
import { GridRender } from "@/components/dragable-grid/GridRender";
import { KeyboardAction } from "@/definitions/definitions";
import { usePatchHmi } from "@/sdk/esp-studio/modules/iot/usePatchHmi";
import { usePostHmiTerminate } from "@/sdk/esp-studio/modules/iot/usePostHmiTerminate";
import { useReactiveHmiRunByUniqueId } from "@/sdk/esp-studio/modules/iot/useReactiveHmiRunByUniqueId";
import { useEffect, useState } from "react";
import { HmiLockButton } from "./HmiLockButton";
import { HmiPlayStopButton } from "./HmiPlayStopButton";
import { useIotNodes, useIotNodesHmi } from "./useIotNodes";
import {
  HmiComponents,
  HmiEntity,
} from "@/sdk/esp-studio/modules/iot/HmiEntity";
import { HmiViewEmptyComponents } from "./HmiViewEmptyComponents";

export const HmiSingleScreen = () => {
  const { uniqueId, queryClient, router, locale } = useCommonEntityManager<
    Partial<any>
  >({});

  const terminateHook = usePostHmiTerminate({
    query: { uniqueId },
    queryClient,
  });
  const getSingleHook = useGetHmiByUniqueId({
    query: { uniqueId },
    queryOptions: {
      cacheTime: 0,
    },
  });

  const { submit } = usePatchHmi({ queryClient });

  var d: HmiEntity = getSingleHook.query.data?.data;
  const t = useT();
  const { nodeTypes } = useIotNodesHmi();
  const [locked, setLocked] = useState(true);

  const { operate, data, connected, close, write } =
    useReactiveHmiRunByUniqueId({
      query: {
        uniqueId,
      },
      onMessage(msg: { connectionId: string; Value: number }) {
        msg = JSON.parse(msg);

        if (window.onConnectionValues[msg.connectionId]) {
          window.onConnectionValues[msg.connectionId](msg);
        } else {
          // Here writes the data coming from server to the UI.
          const el = document.getElementById(msg.connectionId);

          if (el) {
            el.innerHTML = msg.Value + "";
          }
        }
      },
    });

  useActions(
    "hmi",
    [
      {
        Component: () => <HmiLockButton onChange={(m) => setLocked(m)} />,
        uniqueActionKey: "lock",
      },
      {
        Component: () => (
          <HmiPlayStopButton
            state={d?.isRunning}
            onChange={(m) => {
              if (!m) {
                terminateHook
                  .submit({ uniqueId })
                  .catch((e) => httpErrorHanlder(e, t));
                close();
              } else {
                operate({ phrase: "" });
              }
            }}
          />
        ),
        uniqueActionKey: "running",
      },
    ],
    {},
    [d?.isRunning]
  );

  useEffect(() => {
    if (d?.isRunning && !connected) {
      operate({});
    }
  }, [d?.isRunning]);

  useNewAction(() => {
    router.push(HmiEntity.Navigation.createComponents(uniqueId, locale));
  }, KeyboardAction.NewChildEntity);

  return (
    <>
      <CommonSingleManager
        editEntityHandler={({ locale, router }) => {
          router.push(HmiEntity.Navigation.edit(uniqueId, locale));
        }}
        getSingleHook={getSingleHook}
      >
        {d && (
          <GridRender
            onLayout={(l) => {
              if (!l) {
                return;
              }

              submit({
                layout: l,
                uniqueId,
              }).catch((e) => {
                httpErrorHanlder(e, t);
              });
            }}
            locked={locked}
            componentMap={nodeTypes}
            NoComponentsView={HmiViewEmptyComponents}
            onClick={(item: HmiComponents) => {
              if (item.uniqueId) {
                router.push(
                  HmiEntity.Navigation.editComponents(
                    item.linkerId as string,
                    item.uniqueId,
                    locale
                  )
                );
              }
            }}
            components={d?.components || []}
            layout={d?.layout || {}}
          />
        )}
      </CommonSingleManager>
    </>
  );
};
