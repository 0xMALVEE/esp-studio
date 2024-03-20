import { useMemo } from "react";

import { AverageNode } from "./diagram/AverageNode";
import { BasicTimerNode } from "./diagram/BasicTimerNode";
import { CaseValueNode } from "./diagram/CaseValueNode";
import { CircularInputNode } from "./diagram/CircularInputNode";
import { ColorNode } from "./diagram/ColorNode";
import { ContainerLevelValueNode } from "./diagram/ContainerLevelValueNode";
import { CronNode } from "./diagram/CronNode";
import { DataNodeRelay } from "./diagram/DataNodeRelay";
import { DelayNode } from "./diagram/DelayNode";
import { DigitalLabel } from "./diagram/DigitalLabel";
import { FanNode } from "./diagram/FanNode";
import { InterpolateNode } from "./diagram/InterpolateNode";
import { OddEvenNode } from "./diagram/OddEvenNode";
import { SwitchNode } from "./diagram/SwitchNode";
import { ValueGaugeNode } from "./diagram/ValueGaugeNode";
import { ValueMonitorNode } from "./diagram/ValueMonitorNode";

export function useIotNodes() {
  const nodeTypes = useMemo(
    () => ({
      fanNode: FanNode,
      valueMonitorNode: ValueMonitorNode,
      valueGaugeNode: ValueGaugeNode.Sheet,
      containerLevelValueNode: ContainerLevelValueNode,
      averageNode: AverageNode,
      delayNode: DelayNode,
      switchNode: SwitchNode,
      dataNodeRelay: DataNodeRelay,
      caseValueNode: CaseValueNode,
      oddEvenNode: OddEvenNode,
      circularInputNode: CircularInputNode,
      interpolateNode: InterpolateNode,
      colorNode: ColorNode,
      digitalLabel: DigitalLabel,
      basicTimerNode: BasicTimerNode,
      cronNode: CronNode,
    }),
    []
  );

  return { nodeTypes };
}

export function useIotNodesHmi() {
  const nodeTypes = useMemo(
    () => ({
      valueGaugeNode: ValueGaugeNode.Hmi,
    }),
    []
  );

  return { nodeTypes };
}
