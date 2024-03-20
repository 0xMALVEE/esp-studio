import { useCallback } from "react";
import { Connection, Handle, Position } from "reactflow";

export function FanNode({ data }) {
  const onChange = useCallback((evt) => {
    console.log(evt.target.value);
  }, []);

  const isValidConnection = (connection: Connection) => {
    console.log(3, connection);

    return true;
  };

  return (
    <>
      <div className="fan-node">
        <span>
          <img className="rotating" src="/common/fan.svg" />
        </span>

        <Handle
          isValidConnection={isValidConnection}
          type="target"
          id="m3"
          className="target-handle"
          position={Position.Left}
          style={{
            top: "0",
            left: "43%",
          }}
        />
      </div>
    </>
  );
}
