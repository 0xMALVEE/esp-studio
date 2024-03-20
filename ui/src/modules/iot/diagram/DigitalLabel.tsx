import { uuidv4 } from "@/helpers/api";
import { DeepPartial } from "@/hooks/mock-tools";
import { useT } from "@/hooks/useT";
import { ControlSheetObjects } from "@/sdk/esp-studio/modules/iot/ControlSheetEntity";

import { HandleRender } from "./HandleRender";
import { NodeWrapper } from "./NodeWrapper";

export function DigitalLabel(props: { id: string; data: ControlSheetObjects }) {
  let startPoint = 30;

  const t = useT();

  return (
    <>
      <NodeWrapper>
        <div>Digital Transform</div>

        {(props.data?.connections || []).map((connection, index) => {
          return (
            <div key={index}>
              <HandleRender startPoint={startPoint} connection={connection} />
            </div>
          );
        })}
      </NodeWrapper>
    </>
  );
}

DigitalLabel.emptyGenerator = function () {
  const id = uuidv4();
  return {
    type: "digitalLabel",
    data: {
      connections: [
        {
          uniqueId: uuidv4(),
          data: {},
          type: "source",
        },
        {
          uniqueId: uuidv4(),
          data: {},
          type: "target",
        },
      ],
      meta: {
        sources: [0, 100],
        targets: [0, 10],
      },
    },
    id,
    uniqueId: id,
    positionAbsolute: {
      x: 59,
      y: 100,
    },
    position: { x: 50, y: 100 },
  } as DeepPartial<ControlSheetObjects>;
};
