import { useCommonEntityManager } from "@/hooks/useCommonEntityManager";

import {
  CommonEntityManager,
  DtoEntity,
} from "@/components/entity-manager/CommonEntityManager";
import { DataNodeForm } from "./DataNodeEditForm";
import { usePostDataNode } from "src/sdk/esp-studio/modules/iot/usePostDataNode";
import { usePatchDataNode } from "src/sdk/esp-studio/modules/iot/usePatchDataNode";
import { useGetDataNodeByUniqueId } from "src/sdk/esp-studio/modules/iot/useGetDataNodeByUniqueId";
import { DataNodeEntity } from "@/sdk/esp-studio/modules/iot/DataNodeEntity";

export const DataNodeEntityManager = ({ data }: DtoEntity<DataNodeEntity>) => {
  const { router, uniqueId, queryClient, locale, t } = useCommonEntityManager<
    Partial<DataNodeEntity>
  >({
    data,
  });

  const getSingleHook = useGetDataNodeByUniqueId({
    query: {
      uniqueId,
      deep: true,
      withPreloads: "Writers.Writer,Readers.Reader",
    },
  });

  const postHook = usePostDataNode({
    queryClient,
  });

  const patchHook = usePatchDataNode({
    queryClient,
  });

  return (
    <CommonEntityManager
      postHook={postHook}
      getSingleHook={getSingleHook}
      patchHook={patchHook}
      onCancel={() => {
        router.goBackOrDefault(
          DataNodeEntity.Navigation.query(undefined, locale)
        );
      }}
      onFinishUriResolver={(response, locale) =>
        DataNodeEntity.Navigation.single(response.data?.uniqueId, locale)
      }
      Form={DataNodeForm}
      onEditTitle={t.iot.editDataNode}
      onCreateTitle={t.iot.newDataNode}
      data={data}
    />
  );
};
