import { CommonSingleManager } from "@/components/entity-manager/CommonSingleManager";
import { GeneralEntityView } from "@/components/general-entity-view/GeneralEntityView";
import { useCommonEntityManager } from "@/hooks/useCommonEntityManager";
import { useT } from "@/hooks/useT";
import { useGetModbusFunctionCodeByUniqueId } from "src/sdk/esp-studio/modules/iot/useGetModbusFunctionCodeByUniqueId";
import { ModbusFunctionCodeEntity } from "@/sdk/esp-studio/modules/iot/ModbusFunctionCodeEntity";

export const ModbusFunctionCodeSingleScreen = () => {
  const { uniqueId, queryClient } = useCommonEntityManager<Partial<any>>({});

  const getSingleHook = useGetModbusFunctionCodeByUniqueId({
    query: { uniqueId },
  });
  var d: ModbusFunctionCodeEntity | undefined = getSingleHook.query.data?.data;
  const t = useT();
  // usePageTitle(`${d?.name}`);

  return (
    <>
      <CommonSingleManager
        editEntityHandler={({ locale, router }) => {
          router.push(
            ModbusFunctionCodeEntity.Navigation.edit(uniqueId, locale)
          );
        }}
        getSingleHook={getSingleHook}
      >
        <GeneralEntityView
          entity={d}
          fields={[
            {
              elem: d?.name,
              label: t.modbusfunctioncodes.name,
            },
          ]}
        />
      </CommonSingleManager>
    </>
  );
};
