import { useT } from "@/hooks/useT";

import { CommonArchiveManager } from "@/components/entity-manager/CommonArchiveManager";
import { FlowValueList } from "./FlowValueList";
import { useActions } from "@/components/action-menu/ActionMenu";
import { useKeyCombination } from "@/hooks/useKeyPress";
import { KeyboardAction } from "@/definitions/definitions";
import { useRouter } from "@/Router";
import { osResources } from "@/components/mulittarget/multitarget-resource";
import { useLocale } from "@/hooks/useLocale";
import { FlowValueEntity } from "@/sdk/esp-studio/modules/iot/FlowValueEntity";

export const FlowValueArchiveScreen = () => {
  const t = useT();
  const router = useRouter();
  const { locale } = useLocale();

  const goToCharts = () => {
    router.push(`/${locale}/flow-value/report`);
  };

  useKeyCombination(KeyboardAction.ViewQuestions, goToCharts);
  useActions("reportActions", [
    {
      icon: osResources.chart,
      label: t.flowvalues.report,
      uniqueActionKey: "chart",
      onSelect: goToCharts,
    },
  ]);

  return (
    <CommonArchiveManager
      pageTitle={t.flowvalues.archiveTitle}
      newEntityHandler={({ locale, router }) => {
        router.push(FlowValueEntity.Navigation.create(locale));
      }}
      exportPath="flowValues/export"
    >
      <FlowValueList />
    </CommonArchiveManager>
  );
};
