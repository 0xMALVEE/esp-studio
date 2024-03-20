import {
  ControlSheetObjects,
  ControlSheetObjectsConnections,
} from "@/sdk/esp-studio/modules/iot/ControlSheetEntity";
import { createContext, useRef } from "react";
import { useReactFlow } from "reactflow";

export interface DiagramNodeProps {
  id: string;
  data: ControlSheetObjects;
}
export function useDiagram() {
  const { setNodes } = useReactFlow();

  const execInNodes = (nodeId: string, exec: (node: any) => any) => {
    setNodes((nodes) =>
      nodes.map((node) => {
        if (node.id === nodeId) {
          return exec(node);
        }

        return node;
      })
    );
  };

  const setConnectionData = (
    data: any,
    connection: ControlSheetObjectsConnections
  ) => {
    setNodes((nodes) =>
      nodes.map((node) => {
        if (node.id === props.id) {
          const connections = [
            {
              ...connection,
              data: {
                ...connection.data,
                ...data,
              },
            },
          ];

          return {
            ...node,
            data: {
              ...node.data,
              connections,
            },
          };
        }

        return node;
      })
    );
  };

  return { execInNodes, setConnectionData, setNodes };
}

export class MyClass extends EventTarget {
  doSomething(detail: any) {
    const e = new CustomEvent("trigger", { detail });
    this.dispatchEvent(e);
  }
}

export interface SheetContext {
  sheetEvents?: MyClass;
}

export const DiagramContext = createContext<SheetContext>({
  sheetEvents: undefined,
});

export function DiagramContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const sheetEvents = useRef(new MyClass());

  return (
    <DiagramContext.Provider
      value={{
        sheetEvents: sheetEvents.current,
      }}
    >
      {children}
    </DiagramContext.Provider>
  );
}

export function normalizeNodes(items: Array<any>) {
  return (items || []).map((item) => {
    if (!item.position) {
      item.position = {
        x: 50,
        y: 40,
      };
    }
    if (!item.positionAbsolute) {
      item.positionAbsolute = {
        x: 50,
        y: 40,
      };
    }
    return item;
  });
}
