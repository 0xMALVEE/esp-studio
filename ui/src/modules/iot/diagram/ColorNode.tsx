import { uuidv4 } from "@/helpers/api";
import { DeepPartial } from "@/hooks/mock-tools";
import { ControlSheetObjects } from "@/sdk/esp-studio/modules/iot/ControlSheetEntity";
import { DnInterpolateConfigDto } from "@/sdk/esp-studio/modules/iot/DnInterpolateConfigDto";
import { Wheel } from "@uiw/react-color";

import { useState } from "react";
import { DiagramNodeProps } from "./diagramTools";
import { HandleRender } from "./HandleRender";
import { NodeWrapper } from "./NodeWrapper";

export function ColorNode(props: DiagramNodeProps) {
  let startPoint = 15;

  const [hex, setHex] = useState("#fff");
  const connection = props.data?.connections && props.data?.connections[0];

  return (
    <>
      <NodeWrapper>
        <div>Color</div>
        <Wheel
          color={hex}
          width={130}
          height={130}
          onChange={(color) => {
            setHex(color.hex);
            window.sheetEvent?.doSomething({
              connection,
              nextState: { value: color.hex },
            });
          }}
        />
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

ColorNode.emptyGenerator = function () {
  const id = uuidv4();
  return {
    type: "colorNode",
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
