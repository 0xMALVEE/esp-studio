import { osResources } from "@/components/mulittarget/multitarget-resource";
import { KeyboardAction } from "@/definitions/definitions";
import { source } from "@/helpers/source";
import { useKeyCombination } from "@/hooks/useKeyPress";
import { useT } from "@/hooks/useT";
import { useState } from "react";

export function HmiLockButton({
  onChange,
}: {
  onChange?: (v: boolean) => void;
}) {
  const [locked, setLocked] = useState(true);
  const t = useT();
  const toggleLock = () => {
    setLocked((v) => !locked);
    onChange && onChange(!locked);
  };

  useKeyCombination(KeyboardAction.ToggleLock, toggleLock);

  return (
    <button type="button" onClick={toggleLock}>
      {locked ? (
        <span>
          <img src={source(osResources.lock)} />
        </span>
      ) : (
        <span>
          <img src={source(osResources.unlock)} />
        </span>
      )}
    </button>
  );
}
