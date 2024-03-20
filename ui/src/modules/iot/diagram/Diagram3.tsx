import { useActions } from "@/components/action-menu/ActionMenu";
import { KeyboardAction } from "@/definitions/definitions";
import { httpErrorHanlder } from "@/helpers/api";
import { DeepPartial } from "@/hooks/mock-tools";
import { useDebouncedEffect } from "@/hooks/useDebouncedEffect";
import { useKeyCombination } from "@/hooks/useKeyPress";
import { useT } from "@/hooks/useT";
import {
  ControlSheetEntity,
  ControlSheetObjects,
} from "@/sdk/esp-studio/modules/iot/ControlSheetEntity";
import { usePostControlSheetTerminate } from "@/sdk/esp-studio/modules/iot/usePostControlSheetTerminate";

import { useReactiveDataNodeSimulateByUniqueId } from "@/sdk/esp-studio/modules/iot/useReactiveDataNodeSimulateByUniqueId";
import { useCallback, useContext, useEffect, useRef } from "react";
import { useQueryClient } from "react-query";
import {
  Panel,
  PanelGroup,
  PanelGroupOnLayout,
  PanelResizeHandle,
} from "react-resizable-panels";
import ReactFlow, {
  addEdge,
  Background,
  BackgroundVariant,
  Controls,
  MiniMap,
  ReactFlowInstance,
  ReactFlowProvider,
  useEdgesState,
  useNodesState,
  useReactFlow,
} from "reactflow";

import "reactflow/dist/style.css";
import { HmiPlayStopButton } from "../HmiPlayStopButton";
import { useIotNodes } from "../useIotNodes";
import { AverageNode } from "./AverageNode";
import { BasicTimerNode } from "./BasicTimerNode";
import { CaseValueNode } from "./CaseValueNode";
import { CircularInputNode } from "./CircularInputNode";
import { ColorNode } from "./ColorNode";
import { ContainerLevelValueNode } from "./ContainerLevelValueNode";
import { CronNode } from "./CronNode";
import { DataNodeRelay } from "./DataNodeRelay";
import { DelayNode } from "./DelayNode";
import { DiagramToolbar } from "./DiagramToolbar";
import {
  DiagramContext,
  DiagramContextProvider,
  MyClass,
  normalizeNodes,
} from "./diagramTools";
import { DigitalLabel } from "./DigitalLabel";
import { InterpolateNode } from "./InterpolateNode";
import { OddEvenNode } from "./OddEvenNode";
import { SwitchNode } from "./SwitchNode";
import { ValueGaugeNode } from "./ValueGaugeNode";
import { ValueMonitorNode } from "./ValueMonitorNode";

let data;
try {
  data = JSON.parse(localStorage.getItem("diagram") || "");
} catch (err) {}

(window as any).onConnectionValues = {};

export function Diagram({
  value,
  onChange,
}: {
  value?: ControlSheetEntity;
  onChange?: (v: ControlSheetEntity) => void;
}) {
  const queryClient = useQueryClient();
  const t = useT();

  const rfInstance = useRef<ReactFlowInstance>();
  const { nodeTypes } = useIotNodes();
  const { sheetEvents } = useContext(DiagramContext);

  const [objects, setNodes, onNodesChange$] = useNodesState(
    normalizeNodes(value?.objects as any)
  );
  const [edges, setEdges, onEdgesChange$] = useEdgesState(
    (value?.edges || []) as any
  );

  const onNodesChange = (items: any) => {
    // onChange && onChange({ nodes: items, edges } as any);
    onNodesChange$(items);
  };

  const onEdgesChange = (items: any) => {
    // onChange && onChange({ nodes, edges: items } as any);

    onEdgesChange$(items);
  };

  // Skip the first change
  const usageRef = useRef(0);

  useEffect(() => {
    if (usageRef.current > 2) {
      onChange && onChange({ objects, edges } as any);
    }
    usageRef.current = usageRef.current + 1;
    // localStorage.setItem("diagram", JSON.stringify({ nodes, edges }));
  }, [objects, edges]);

  const onConnect = useCallback(
    (params: any) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  const { withDebounce } = useDebouncedEffect();

  const { submit } = usePostControlSheetTerminate({ queryClient });

  const { operate, data, connected, close, write } =
    useReactiveDataNodeSimulateByUniqueId({
      query: {
        uniqueId: value.uniqueId,
      },
      onMessage(msg: { connectionId: string; Value: number }) {
        msg = JSON.parse(msg);

        if (window.onConnectionValues[msg.connectionId]) {
          window.onConnectionValues[msg.connectionId](msg);
        } else {
          // Here writes the data coming from server to the UI.
          const el = document.getElementById(msg.connectionId);

          if (el) {
            el.innerHTML = msg.Value + "";
          }
        }
      },
    });

  const playSimulation = (con = undefined) => {
    if (connected) {
      submit({ uniqueId: value.uniqueId })
        .then(() => {
          close();
        })
        .catch((e) => httpErrorHanlder(e, t));
    } else {
      operate({ phrase: "" });
    }
  };

  useActions("sheetActions", [
    {
      Component: () => (
        <HmiPlayStopButton
          onChange={(m) => {
            if (!m) {
              submit({ uniqueId: value.uniqueId })
                .then(() => {
                  close();
                })
                .catch((e) => httpErrorHanlder(e, t));
            } else {
              operate({ phrase: "" });
            }
          }}
        />
      ),
      uniqueActionKey: "running",
    },
  ]);

  useEffect(() => {
    if (value.isRunning) {
      operate({ phrase: "" });
    }
  }, [value.isRunning]);
  useKeyCombination(KeyboardAction.StopStart, () => {
    playSimulation();
  });

  const onLayout = (layout: PanelGroupOnLayout) => {
    withDebounce(() => {
      console.log(layout);
      localStorage.setItem("panel_layout", JSON.stringify(layout));
    }, 100);
  };

  const { setViewport } = useReactFlow();

  useEffect(() => {
    try {
      const flow = JSON.parse(localStorage.getItem("diagramViewPort") || "");

      if (flow) {
        const { x = 0, y = 0, zoom = 1 } = flow;
        setViewport({ x, y, zoom });
      }
    } catch (error) {}
  }, [setViewport]);

  const onMoveEnd = () => {
    const flow = rfInstance.current?.toObject();
    localStorage.setItem(
      "diagramViewPort",
      JSON.stringify(flow?.viewport, null, 2)
    );
    console.log(100, flow?.viewport);
  };

  useEffect(() => {
    const ev: MyClass = new MyClass();
    (window as any).sheetEvent = ev;
    ev.addEventListener("trigger", (e) => {
      write(JSON.stringify(e.detail));
    });
  }, []);

  const addFeature = (type: string) => {
    let f: DeepPartial<ControlSheetObjects> | null = null;

    if (type === "basicTimerNode") {
      f = BasicTimerNode.emptyGenerator();
    }
    if (type === "valueMonitorNode") {
      f = ValueMonitorNode.emptyGenerator();
    }
    if (type === "averageNode") {
      f = AverageNode.emptyGenerator();
    }
    if (type === "caseValueNode") {
      f = CaseValueNode.emptyGenerator();
    }
    if (type === "switchNode") {
      f = SwitchNode.emptyGenerator();
    }
    if (type === "dataNodeRelay") {
      f = DataNodeRelay.emptyGenerator(undefined);
    }
    if (type === "colorNode") {
      f = ColorNode.emptyGenerator();
    }
    if (type === "dataNodeRelaySource") {
      f = DataNodeRelay.emptyGenerator("source");
    }
    if (type === "dataNodeRelayTarget") {
      f = DataNodeRelay.emptyGenerator("target");
    }
    if (type === "interpolateNode") {
      f = InterpolateNode.emptyGenerator();
    }
    if (type === "oddEvenNode") {
      f = OddEvenNode.emptyGenerator();
    }
    if (type === "circularInputNode") {
      f = CircularInputNode.emptyGenerator();
    }
    if (type === "delayNode") {
      f = DelayNode.emptyGenerator();
    }
    if (type === "valueGaugeNode") {
      f = ValueGaugeNode.Sheet.emptyGenerator();
    }
    if (type === "containerLevelValueNode") {
      f = ContainerLevelValueNode.emptyGenerator();
    }
    if (type === "cronNode") {
      f = CronNode.emptyGenerator();
    }
    if (type === "digitalLabel") {
      f = DigitalLabel.emptyGenerator();
    }

    if (f) {
      setNodes((n) => {
        return [...(n || []), f] as any;
      });
    }
  };

  return (
    <>
      <PanelGroup autoSaveId="panel3" direction="horizontal">
        <Panel id="sidebar" minSizePercentage={25} order={1}>
          <div
            style={{
              height: "100%",
              direction: "ltr",
              display: "flex",
            }}
            className="diagram-fxfx"
          >
            <ReactFlow
              nodes={objects}
              edges={edges}
              nodeTypes={nodeTypes}
              onMoveEnd={() => onMoveEnd()}
              onInit={(ref) => (rfInstance.current = ref)}
              onNodesChange={onNodesChange}
              onEdgesChange={onEdgesChange}
              onConnect={onConnect}
            >
              <Controls />
              <MiniMap />
              <Background variant={BackgroundVariant.Dots} gap={12} size={1} />
            </ReactFlow>
          </div>
        </Panel>
        <PanelResizeHandle
          className="panel-separator"
          style={{ width: "1px" }}
        />

        <Panel minSizePercentage={2} maxSizePercentage={15} order={2}>
          <div style={{ height: "100%", overflowY: "auto" }}>
            <DiagramToolbar addFeature={addFeature}></DiagramToolbar>
          </div>
        </Panel>
      </PanelGroup>
    </>
  );
}

export default function Diagram9(props: {
  value?: ControlSheetEntity;
  onChange?: (v: ControlSheetEntity) => void;
}) {
  return (
    <ReactFlowProvider>
      <Diagram {...props} />
    </ReactFlowProvider>
  );
}
