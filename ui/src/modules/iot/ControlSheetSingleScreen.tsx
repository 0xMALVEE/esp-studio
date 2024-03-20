import {
  useBackButton,
  useEditAction,
} from "@/components/action-menu/ActionMenu";
import { DtoEntity } from "@/components/entity-manager/CommonEntityManager";
import { KeyboardAction } from "@/definitions/definitions";
import { httpErrorHanlder } from "@/helpers/api";
import { DeepPartial } from "@/hooks/mock-tools";
import { useCommonEntityManager } from "@/hooks/useCommonEntityManager";
import { useDebouncedEffect } from "@/hooks/useDebouncedEffect";
import { ControlSheetEntity } from "@/sdk/esp-studio/modules/iot/ControlSheetEntity";
import { usePatchControlSheet } from "@/sdk/esp-studio/modules/iot/usePatchControlSheet";
import { cloneDeep } from "lodash";
import { useGetControlSheetByUniqueId } from "src/sdk/esp-studio/modules/iot/useGetControlSheetByUniqueId";
import Diagram3 from "./diagram/Diagram3";

export const ControlSheetSingleScreen = ({
  data,
}: DtoEntity<ControlSheetEntity>) => {
  const { router, uniqueId, queryClient, t, locale } = useCommonEntityManager<
    Partial<ControlSheetEntity>
  >({
    data,
  });
  const { withDebounce } = useDebouncedEffect();

  const getSingleHook = useGetControlSheetByUniqueId({
    queryOptions: {
      cacheTime: 0,
    },
    query: {
      uniqueId,
      deep: true,
      withPreloads: [
        "Objects.Connections",
        "Objects.Position",
        "Objects.PositionAbsolute",
      ].join(","),
    },
  });

  const patchHook = usePatchControlSheet({
    queryClient,
  });

  function afterFetch(e: ControlSheetEntity): ControlSheetEntity {
    if (!e.objects) {
      return e;
    }

    for (let obj of e.objects) {
      const dataBack = cloneDeep(obj.data);
      obj.data = {
        connections: obj.connections,
        meta: obj.meta,
      };
      // const ret = { ...obj };
      // ret.data = {};
      // if (obj.data) {
      //   ret.data.data = obj.data;
      // }
      // if (obj.connections) {
      //   ret.data.connections = obj.connections;
      // }
      // obj = { ...ret };
    }

    return e;
  }

  function beforeSave(e: DeepPartial<ControlSheetEntity>): ControlSheetEntity {
    const q: any = cloneDeep(e);

    for (const obj of q.objects) {
      obj.connections = obj.data?.connections || [];
      if (obj?.data?.connections) {
        delete obj.data.connections;
      }
      obj.meta = obj.data?.meta || {};
      if (obj?.data?.meta) {
        delete obj.data.meta;
      }
    }

    return q as any;
  }

  const onChange = (e: ControlSheetEntity) => {
    withDebounce(() => {
      patchHook
        .submit(
          beforeSave({
            uniqueId,
            edges: e.edges,
            objects: e.objects,
          })
        )
        .catch((err: any) => {
          httpErrorHanlder(err, t);
        });
    }, 600);
  };

  useEditAction(
    () => router.push(ControlSheetEntity.Navigation.edit(uniqueId, locale)),
    KeyboardAction.EditEntity
  );
  useBackButton(
    () =>
      router.goBackOrDefault(ControlSheetEntity.Navigation.query(null, locale)),
    KeyboardAction.CommonBack
  );
  return (
    <div style={{ margin: "-20px", height: "calc(100vh - 55px)" }}>
      {getSingleHook.query.data?.data && (
        <Diagram3
          value={afterFetch(getSingleHook.query.data?.data)}
          onChange={onChange as any}
        />
      )}
    </div>
  );
};
