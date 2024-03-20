import { uuidv4 } from "@/helpers/api";
import { DeepPartial } from "@/hooks/mock-tools";
import {
  ControlSheetObjects,
  ControlSheetObjectsConnections,
} from "@/sdk/esp-studio/modules/iot/ControlSheetEntity";
import { useContext, useState } from "react";
import { useQueryClient } from "react-query";
import { useReactFlow } from "reactflow";
import { DiagramContext, DiagramNodeProps, useDiagram } from "./diagramTools";
import { HandleRender } from "./HandleRender";
import { NodeWrapper } from "./NodeWrapper";
import { SourceTargetInsert } from "./SourceTargetInsert";

export function SwitchNode(props: DiagramNodeProps) {
  let startPoint = 15;

  const { setNodes } = useReactFlow();
  const { sheetEvents } = useContext(DiagramContext);
  const queryClient = useQueryClient();

  const { execInNodes } = useDiagram();

  const append = () => {
    execInNodes(props.id, (node) => {
      return {
        ...node,
        data: {
          ...node.data,
          connections: [
            ...(node.data?.connections || []),
            {
              type: "multiplex",
              uniqueId: uuidv4(),
            },
          ],
        },
      };
    });
  };

  const remove = (type: "source" | "target", index: number) => {
    execInNodes(props.id, (node) => {
      const meta = node.data.meta;

      if (type === "source") {
        meta.sources = meta.sources.filter((m, i) => i !== index);
      }
      if (type === "target") {
        meta.targets = meta.targets.filter((m, i) => i !== index);
      }
      return {
        ...node,
        data: {
          ...node.data,
          meta,
        },
      };
    });
  };

  const update = (data, type: "source" | "target", index: number) => {
    setNodes((nodes) =>
      nodes.map((node) => {
        if (node.id === props.id) {
          const meta = node.data.meta;

          if (type === "source") {
            meta.sources = meta.sources.map((m, i) => {
              if (i === index) {
                return data;
              }

              return m;
            });
          }
          if (type === "target") {
            meta.targets = meta.targets.map((m, i) => {
              if (i === index) {
                return data;
              }
              return m;
            });
          }

          return {
            ...node,
            data: {
              ...node.data,
              meta,
            },
          };
        }
        return node;
      })
    );
  };

  return (
    <>
      <NodeWrapper>
        <div>Switch</div>
        <SourceTargetInsert append={append} />

        {(props.data?.connections || []).map((connection, index) => {
          startPoint += 45;
          return (
            <div key={index}>
              <Button connection={connection} />
              <HandleRender startPoint={startPoint} connection={connection} />
            </div>
          );
        })}
      </NodeWrapper>
    </>
  );
}

function Button({ connection }: { connection: any }) {
  const [currentState, setCurrentState] = useState(0);
  return (
    <button
      onClick={() => {
        setCurrentState((v) => {
          console.log("Seinding connection", connection);
          const newV = v === 0 ? 1 : 0;
          window.sheetEvent?.doSomething({
            connection,
            nextState: { value: newV },
          });
          return newV;
        });
      }}
      className="btn btn-primary m-1"
    >
      {currentState === 0 ? "OFF" : currentState === 1 ? "ON" : "N/A"}
    </button>
  );
}

SwitchNode.emptyGenerator = function () {
  const id = uuidv4();

  return {
    type: "switchNode",
    data: {
      connections: [
        { type: "multiplex", uniqueId: uuidv4() },
      ] as ControlSheetObjectsConnections[],
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
