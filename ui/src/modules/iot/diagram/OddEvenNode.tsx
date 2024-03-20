import { uuidv4 } from "@/helpers/api";
import { useT } from "@/hooks/useT";
import { ControlSheetObjectsConnections } from "@/sdk/esp-studio/modules/iot/ControlSheetEntity";
import { useReactFlow } from "reactflow";
import { HandleRender } from "./HandleRender";
import { emptyNode, NodeWrapper } from "./NodeWrapper";
interface CronDto {
  cron: string;
  connections: ControlSheetObjectsConnections[];
}

export function OddEvenNode(props: { data: CronDto; id: string }) {
  const t = useT();

  return (
    <NodeWrapper>
      OddEven
      {(props.data?.connections || []).map((connection, index) => {
        return (
          <div key={index}>
            <HandleRender startPoint={30} connection={connection} />
          </div>
        );
      })}
    </NodeWrapper>
  );
}

OddEvenNode.emptyGenerator = () =>
  emptyNode("oddEvenNode", [
    {
      uniqueId: uuidv4(),
      data: {},
      type: "source",
    },
    { uniqueId: uuidv4(), data: {}, type: "target" },
  ]);
