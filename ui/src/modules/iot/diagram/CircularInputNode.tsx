import { uuidv4 } from "@/helpers/api";
import { DeepPartial } from "@/hooks/mock-tools";
import { ControlSheetObjects } from "@/sdk/esp-studio/modules/iot/ControlSheetEntity";
import { DnInterpolateConfigDto } from "@/sdk/esp-studio/modules/iot/DnInterpolateConfigDto";

import { useState } from "react";
import {
  CircularInput,
  CircularProgress,
  CircularThumb,
  CircularTrack,
} from "react-circular-input";
import { HandleRender } from "./HandleRender";
import { NodeWrapper } from "./NodeWrapper";

export function CircularInputNode(props: {
  id: string;
  data: DnInterpolateConfigDto;
}) {
  let startPoint = 15;

  const [hex, setHex] = useState("#fff");
  const [value, setValue] = useState(0.25);

  return (
    <>
      <NodeWrapper>
        <div>Input</div>
        <CircularInput
          value={value}
          onChange={(v) => {
            setValue(v);
            window.sheetEvent?.doSomething({
              connection: props.data?.connections[0],
              nextState: { value: v },
            });
          }}
        >
          <CircularTrack />
          <CircularProgress />
          <CircularThumb />
          <text
            x={100}
            y={100}
            textAnchor="middle"
            dy="0.3em"
            fontWeight="bold"
          >
            {(value || 0).toFixed(3)}
          </text>
        </CircularInput>

        {(props.data?.connections || []).map((connection, index) => {
          startPoint += 45;
          return (
            <div key={connection.uniqueId}>
              <HandleRender startPoint={startPoint} connection={connection} />
            </div>
          );
        })}
      </NodeWrapper>
    </>
  );
}

CircularInputNode.emptyGenerator = function () {
  const id = uuidv4();
  return {
    type: "circularInputNode",
    data: {
      connections: [
        {
          uniqueId: uuidv4(),
          data: {},
          type: "source",
        },
      ],
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
