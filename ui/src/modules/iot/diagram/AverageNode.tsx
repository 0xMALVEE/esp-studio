import { uuidv4 } from "@/helpers/api";
import { DeepPartial } from "@/hooks/mock-tools";
import { useT } from "@/hooks/useT";
import {
  ControlSheetObjects,
  ControlSheetObjectsConnections,
} from "@/sdk/esp-studio/modules/iot/ControlSheetEntity";

import { partition } from "lodash";
import { useReactFlow } from "reactflow";
import { HandleRender } from "./HandleRender";
import { NodeWrapper } from "./NodeWrapper";

interface TimerDto {
  interval: number;
  connections: ControlSheetObjectsConnections[];
}

export function AverageNode(props: { data: TimerDto; id: string }) {
  const t = useT();
  let sourcesStartPoint = 10;
  let targetStartPoint = 10;
  const { setNodes } = useReactFlow();

  const [targets, sources] = partition(
    props?.data.connections || [],
    (m) => m.type === "source"
  );

  return (
    <>
      <NodeWrapper>
        Average Node
        <div style={{ height: "150px" }}></div>
        {(targets || []).map((connection, index) => {
          sourcesStartPoint += 30;
          return (
            <div key={index}>
              <HandleRender
                startPoint={sourcesStartPoint}
                connection={connection}
              />
            </div>
          );
        })}
        {(sources || []).map((connection, index) => {
          targetStartPoint += 30;
          return (
            <div key={index}>
              <HandleRender
                startPoint={targetStartPoint}
                connection={connection}
              />
            </div>
          );
        })}
      </NodeWrapper>
    </>
  );
}

AverageNode.emptyGenerator = function () {
  const id = uuidv4();
  return {
    type: "averageNode",
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
        {
          uniqueId: uuidv4(),
          data: {},
          type: "target",
        },
        {
          uniqueId: uuidv4(),
          data: {},
          type: "target",
        },
        {
          uniqueId: uuidv4(),
          data: {},
          type: "target",
        },
        {
          uniqueId: uuidv4(),
          data: {},
          type: "target",
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
