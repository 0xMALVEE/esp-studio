import { CommonSingleManager } from "@/components/entity-manager/CommonSingleManager";
import { GeneralEntityView } from "@/components/general-entity-view/GeneralEntityView";
import { useCommonEntityManager } from "@/hooks/useCommonEntityManager";
import { useT } from "@/hooks/useT";
import { FlowValueEntity } from "@/sdk/esp-studio/modules/iot/FlowValueEntity";
import { useGetFlowValueByUniqueId } from "src/sdk/esp-studio/modules/iot/useGetFlowValueByUniqueId";

export const FlowValueSingleScreen = () => {
  const { uniqueId, queryClient } = useCommonEntityManager<Partial<any>>({});

  const getSingleHook = useGetFlowValueByUniqueId({ query: { uniqueId } });
  var d: FlowValueEntity | undefined = getSingleHook.query.data?.data;
  const t = useT();
  // usePageTitle(`${d?.name}`);

  return (
    <>
      <CommonSingleManager
        editEntityHandler={({ locale, router }) => {
          router.push(FlowValueEntity.Navigation.edit(uniqueId, locale));
        }}
        getSingleHook={getSingleHook}
      >
        <GeneralEntityView
          entity={d}
          fields={[
            {
              elem: d?.connectionId,
              label: t.flowvalues.connectionId,
            },

            {
              elem: d?.valueString,
              label: t.flowvalues.valueString,
            },
            {
              elem: d?.valueFloat,
              label: t.flowvalues.valueFloat,
            },
            {
              elem: d?.valueInt,
              label: t.flowvalues.valueInt,
            },
          ]}
        />
      </CommonSingleManager>
    </>
  );
};
