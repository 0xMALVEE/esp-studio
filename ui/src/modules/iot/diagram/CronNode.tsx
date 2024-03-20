import { FormText } from "@/components/forms/form-text/FormText";
import { uuidv4 } from "@/helpers/api";
import { useT } from "@/hooks/useT";
import { ControlSheetObjects } from "@/sdk/esp-studio/modules/iot/ControlSheetEntity";
import { Handle, Position, useReactFlow } from "reactflow";
import { DiagramNodeProps, useDiagram } from "./diagramTools";
import { emptyNode, NodeWrapper } from "./NodeWrapper";

export function CronNode(props: DiagramNodeProps) {
  const t = useT();

  const { setConnectionData, setNodes } = useDiagram();

  return (
    <NodeWrapper>
      Cron
      {(props.data?.connections || []).map((connection, index) => {
        return (
          <div key={index}>
            <FormText
              value={connection.data?.expression}
              onChange={(v) => {
                setConnectionData({ expression: v }, connection);
              }}
              label="Cron"
            />

            {connection.uniqueId && (
              <Handle
                type="source"
                className="source-handle"
                id={connection.uniqueId}
                position={Position.Right}
                style={{
                  top: "80px",
                  right: "-9px",
                }}
              />
            )}
          </div>
        );
      })}
    </NodeWrapper>
  );
}

CronNode.emptyGenerator = () =>
  emptyNode("cronNode", [
    {
      uniqueId: uuidv4(),
      data: {},
      type: "source",
    },
  ]);
