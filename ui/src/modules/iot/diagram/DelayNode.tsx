import { uuidv4 } from "@/helpers/api";
import { DeepPartial } from "@/hooks/mock-tools";
import { useT } from "@/hooks/useT";
import { ControlSheetObjects } from "@/sdk/esp-studio/modules/iot/ControlSheetEntity";
import { Handle, Position } from "reactflow";
import { DiagramNodeProps } from "./diagramTools";
import { NodeWrapper } from "./NodeWrapper";

export function DelayNode(props: DiagramNodeProps) {
  const t = useT();

  const sourceConnect = (props.data?.connections || []).find(
    (f) => f.type === "source"
  );
  const targetConnect = (props.data?.connections || []).find(
    (f) => f.type === "target"
  );

  return (
    <>
      <NodeWrapper>
        Delay
        {sourceConnect?.uniqueId && (
          <Handle
            type="source"
            className="source-handle"
            id={sourceConnect.uniqueId}
            position={Position.Right}
            style={{
              top: "80px",
              right: "-9px",
            }}
          />
        )}
        {targetConnect?.uniqueId && (
          <Handle
            type="target"
            className="target-handle"
            id={targetConnect.uniqueId}
            position={Position.Left}
            style={{
              top: "80px",
              left: "-9px",
            }}
          />
        )}
      </NodeWrapper>
    </>
  );
}

DelayNode.emptyGenerator = function () {
  const id = uuidv4();
  return {
    type: "delayNode",
    data: {
      connections: [
        {
          uniqueId: uuidv4(),
          data: {},
          type: "target",
        },
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
