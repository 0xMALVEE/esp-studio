import { FormText } from "@/components/forms/form-text/FormText";
import { uuidv4 } from "@/helpers/api";
import { useT } from "@/hooks/useT";
import {
  ControlSheetObjects,
  ControlSheetObjectsConnections,
} from "@/sdk/esp-studio/modules/iot/ControlSheetEntity";
import { Handle, Position, useReactFlow } from "reactflow";
import { useDiagram } from "./diagramTools";
import { emptyNode, NodeWrapper } from "./NodeWrapper";

export function BasicTimerNode(props: {
  data: ControlSheetObjects;
  id: string;
}) {
  const { setConnectionData } = useDiagram();
  const t = useT();

  return (
    <NodeWrapper>
      Timer
      {(props.data?.connections || []).map((connection, index) => {
        return (
          <div key={index}>
            <FormText
              value={(connection.data as any)?.interval}
              onChange={(v) => {
                setConnectionData({ interval: v }, connection);
              }}
              label="Interval (ms)"
              type="number"
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

BasicTimerNode.emptyGenerator = () =>
  emptyNode("basicTimerNode", [
    {
      uniqueId: uuidv4(),
      data: {},
      type: "source",
    },
  ]);
