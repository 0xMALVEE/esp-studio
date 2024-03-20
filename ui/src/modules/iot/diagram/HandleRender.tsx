import { ControlSheetObjectsConnections } from "@/sdk/esp-studio/modules/iot/ControlSheetEntity";
import { Handle, Position } from "reactflow";

export function HandleRender({
  connection,
  startPoint,
}: {
  connection: ControlSheetObjectsConnections;
  startPoint?: number;
}) {
  return (
    <>
      {(connection.type === "source" || connection.type === "multiplex") && (
        <Handle
          type="source"
          position={Position.Right}
          className="source-handle"
          id={connection.uniqueId}
          key={connection.uniqueId}
          style={{
            top: startPoint,
            right: "-9px",
          }}
        />
      )}
      {(connection.type === "target" || connection.type === "multiplex") && (
        <Handle
          type="target"
          position={Position.Left}
          className="target-handle"
          id={connection.uniqueId}
          key={connection.uniqueId}
          style={{
            top: startPoint,
            left: "-9px",
          }}
        />
      )}
    </>
  );
}
