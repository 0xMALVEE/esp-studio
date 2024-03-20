import { useCommonEntityManager } from "@/hooks/useCommonEntityManager";

import { DtoEntity } from "@/components/entity-manager/CommonEntityManager";
import { HeadlessEntityManager } from "@/components/entity-manager/HeadlessEntityManager";
import { DataNodeValuesEditForm } from "./DataNodeValuesEditForm";

import { uuidv4 } from "@/helpers/api";
import { DataNodeValues } from "@/sdk/esp-studio/modules/iot/DataNodeEntity";
import { usePostDataNodeByLinkerIdValues } from "@/sdk/esp-studio/modules/iot/usePostDataNodeByLinkerIdValues";

export const DataNodeValuesEntityManager = ({
  data,
}: DtoEntity<DataNodeValues>) => {
  const { router, uniqueId, queryClient, locale, t } = useCommonEntityManager<
    Partial<DataNodeValues>
  >({
    data,
  });

  // const getSingleHook = useGetDataNodeByUniqueId({
  //   query: {
  //     uniqueId,
  //     deep: true,
  //     withPreloads: "Writers.Writer,Readers.Reader",
  //   },
  // });

  const postHook = usePostDataNodeByLinkerIdValues({
    queryClient,
    query: {
      linkerId: uniqueId,
    },
  });

  // const patchHook = usePatchDataNode({
  //   queryClient,
  // });

  return (
    <HeadlessEntityManager
      postHook={postHook}
      beforeSubmit={(data) => {
        data.uniqueId = uuidv4();
        return data;
      }}
      // getSingleHook={getSingleHook}
      // patchHook={patchHook}
      // onCancel={() => {
      //   // router.push(DataNodeEntity.Navigation.query(undefined, locale));
      // }}
      // onFinishUriResolver={(response, locale) =>
      // DataNodeEntity.Navigation.single(response.data?.uniqueId, locale)
      // }
      Form={DataNodeValuesEditForm}
      data={data}
    />
  );
};
