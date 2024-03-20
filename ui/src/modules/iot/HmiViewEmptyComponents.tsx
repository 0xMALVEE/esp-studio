import { useT } from "@/hooks/useT";

export const HmiViewEmptyComponents = () => {
  const t = useT();
  return <span>{t.hmicomponents.noComponents}</span>;
};
