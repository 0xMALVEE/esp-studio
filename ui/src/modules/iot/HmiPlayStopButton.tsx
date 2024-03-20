import { osResources } from "@/components/mulittarget/multitarget-resource";
import { KeyboardAction } from "@/definitions/definitions";
import { source } from "@/helpers/source";
import { useKeyCombination } from "@/hooks/useKeyPress";
import { useT } from "@/hooks/useT";
import { useEffect, useState } from "react";

export function HmiPlayStopButton({
  onChange,
  state,
}: {
  onChange?: (v: boolean) => void;
  state?: boolean | null;
}) {
  const [playing, setPlayState] = useState<boolean | undefined | null>(
    undefined
  );
  const t = useT();
  const toggleHmiRuntime = () => {
    setPlayState((v) => !playing);
    onChange && onChange(!playing);
  };

  useKeyCombination(KeyboardAction.StopStart, toggleHmiRuntime);

  useEffect(() => {
    if (state !== undefined) {
      setPlayState(state);
    }
  }, [state]);

  return (
    <button type="button" onClick={toggleHmiRuntime}>
      {playing ? (
        <span>
          <img src={source(osResources.pause)} />
        </span>
      ) : (
        <span>
          <img src={source(osResources.play)} />
        </span>
      )}
    </button>
  );
}
