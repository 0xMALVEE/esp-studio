import { uuidv4 } from "@/helpers/api";
import { DeepPartial } from "@/hooks/mock-tools";
import { ControlSheetObjects } from "@/sdk/esp-studio/modules/iot/ControlSheetEntity";
import { TemperatureHmiComponentDto } from "@/sdk/esp-studio/modules/iot/TemperatureHmiComponentDto";
import { useEffect, useRef } from "react";
import { VisualComponent } from "../definitions";
import { HandleRender } from "./HandleRender";
import { NodeWrapper } from "./NodeWrapper";
const CG = require("canvas-gauges");

/**
 * It creates a range for splitting. 20-100 => 0, 20, 40, 60, 80, 100
 * useful for guage creation
 */
function createRange(a: number, b: number, total = 10): Array<string> {
  const items: Array<string> = [];
  const step = (b - a) / total;

  for (let i = 0; i <= b; i += step) {
    items.push(`${i}`);
  }

  return items;
}

/**
 * Use this automatically highlight the gauges,
 * with colors based on their possible range
 */

interface RangeHightLight {
  from: number;
  to: number;
  color: string;
}

function hightlightBasedOnTicks(
  minValue: number,
  maxValue: number
): RangeHightLight[] {
  const range = createRange(minValue, maxValue, 5);

  if (!range || !Array.isArray(range)) {
    return [];
  }

  return [
    { from: +range[0], to: +range[1], color: "rgba(0,255,0,.15)" },
    { from: +range[1], to: +range[2], color: "rgba(255,255,0,.15)" },
    { from: +range[2], to: +range[3], color: "rgba(255,30,0,.25)" },
    { from: +range[3], to: +range[4], color: "rgba(255,0,225,.25)" },
    { from: +range[4], to: +range[5], color: "rgba(0,0,255,.25)" },
  ];
}
declare global {
  interface Window {
    onConnectionValues: {
      [key: string]: any;
    };
  }
}

type PossibleGauge = any;
type PossibleReactiveData = {
  Value: any;
};

export function ValueGaugeNodeSheet(props: { data: ControlSheetObjects }) {
  const ref = useRef<PossibleGauge>();

  useEffect(() => {
    if (
      (props.data?.connections?.length || 0) > 0 &&
      (props.data?.connections || [])[0].uniqueId
    ) {
      const con = (props.data?.connections || [])[0];
      if (con.uniqueId) {
        window.onConnectionValues[con.uniqueId] = (
          data: PossibleReactiveData
        ) => {
          if (ref.current) {
            ref.current.value = data.Value;
          }
        };

        return () => {
          if (con.uniqueId) window.onConnectionValues[con.uniqueId] = undefined;
        };
      }
    }
  }, [props.data]);

  return (
    <>
      <NodeWrapper>
        {(props.data?.connections || []).map((connection, index) => {
          return (
            <div key={index}>
              <HandleRender connection={connection} />
            </div>
          );
        })}
        <ValueGaugeNodeBare
          onRef={(r) => (ref.current = r)}
          data={props?.data?.item?.data}
        />
      </NodeWrapper>
    </>
  );
}

export function ValueGaugeNodeHmi(props: { data: ControlSheetObjects }) {
  const ref = useRef<PossibleGauge>();

  useEffect(() => {
    if (!props.data?.item) {
      return;
    }
    window.onConnectionValues[`comp_${props.data?.item.uniqueId}_t_con1`] = (
      data: PossibleReactiveData
    ) => {
      ref.current.value = data.Value;
    };

    return () => {
      window.onConnectionValues[`comp_${props.data?.item.uniqueId}_t_con1`] =
        undefined;
    };
  }, [props.data]);

  return (
    <>
      <ValueGaugeNodeBare
        onRef={(r) => (ref.current = r)}
        data={props?.data?.item?.data}
      />
    </>
  );
}

export function ValueGaugeNodeBare({
  data,
  onRef,
}: {
  data: TemperatureHmiComponentDto;
  onRef?: (r: PossibleGauge) => void;
}) {
  const gaugeRef = useRef<any>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rendered = useRef(false);
  useEffect(() => {
    if (!canvasRef.current || rendered.current) {
      return;
    }

    setTimeout(() => {
      const minValue = +(data?.minimumTemperature || 0);
      const maxValue = +(data?.maximumTemperature || 100);
      const majorTicks = createRange(minValue, maxValue);
      const cgProps = {
        renderTo: canvasRef.current,
        animation: false,
        highlights: hightlightBasedOnTicks(minValue, maxValue),
        minValue,
        maxValue,
        units: data.units,
        majorTicks,
      };

      const ref =
        data.viewMode === "linear"
          ? new CG.LinearGauge(cgProps)
          : new CG.RadialGauge(cgProps);
      ref.draw();
      gaugeRef.current = ref;
      onRef && onRef(ref);
    }, 150);

    rendered.current = true;
  }, [canvasRef.current, data]);

  return (
    <>
      <canvas style={{ margin: "auto" }} ref={canvasRef}></canvas>
    </>
  );
}

export const ValueGaugeNode: VisualComponent = {
  Hmi: ValueGaugeNodeHmi,
  Sheet: ValueGaugeNodeSheet,
};

ValueGaugeNodeSheet.emptyGenerator = function () {
  const id = uuidv4();
  return {
    type: "valueGaugeNode",
    data: {
      connections: [
        {
          uniqueId: uuidv4(),
          data: {},
          type: "target",
        },
      ],
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
