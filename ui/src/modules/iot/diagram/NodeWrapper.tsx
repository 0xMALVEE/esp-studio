import { uuidv4 } from "@/helpers/api";
import { DeepPartial } from "@/hooks/mock-tools";
import {
  ControlSheetObjects,
  ControlSheetObjectsConnections,
} from "@/sdk/esp-studio/modules/iot/ControlSheetEntity";

export function NodeWrapper(props: { children: any }) {
  return (
    <div className="area-box">
      <div className="area-box-drag">
        <button className="btn-sm btn btn-success">M</button>
      </div>
      <div className="node-content nodrag">{props.children}</div>
    </div>
  );
}

export function emptyNode(
  type: string,
  connections: Partial<ControlSheetObjectsConnections>[]
) {
  const id = uuidv4();
  return {
    type,
    data: {
      connections: connections || [],
    },
    id,
    uniqueId: id,
    positionAbsolute: {
      x: 59,
      y: 100,
    },
    position: { x: 50, y: 100 },
  } as DeepPartial<ControlSheetObjects>;
}
