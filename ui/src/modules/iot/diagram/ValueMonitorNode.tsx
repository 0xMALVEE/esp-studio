import { uuidv4 } from "@/helpers/api";
import { DeepPartial } from "@/hooks/mock-tools";
import { ControlSheetObjects } from "@/sdk/esp-studio/modules/iot/ControlSheetEntity";
import { DiagramNodeProps } from "./diagramTools";
import { HandleRender } from "./HandleRender";
import { NodeWrapper } from "./NodeWrapper";

export function ValueMonitorNode(props: DiagramNodeProps) {
  return (
    <>
      <NodeWrapper>
        {(props.data?.connections || []).map((connection, index) => {
          return (
            <div key={index}>
              <span
                style={{ marginTop: "10px", marginLeft: "10px" }}
                id={connection.uniqueId}
              >
                #Value
              </span>
              <HandleRender connection={connection} />
            </div>
          );
        })}
      </NodeWrapper>
    </>
  );
}

ValueMonitorNode.emptyGenerator = function () {
  const id = uuidv4();
  return {
    type: "valueMonitorNode",
    data: {
      connections: [
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
