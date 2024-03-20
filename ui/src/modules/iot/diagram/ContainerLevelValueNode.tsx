import { uuidv4 } from "@/helpers/api";
import { DeepPartial } from "@/hooks/mock-tools";
import { useEffect, useRef, useState } from "react";
import { HandleRender } from "./HandleRender";
import { NodeWrapper } from "./NodeWrapper";
import LiquidFillGauge from "react-liquid-gauge";
import { color } from "d3-color";
import { interpolateRgb } from "d3-interpolate";
import { ControlSheetObjects } from "@/sdk/esp-studio/modules/iot/ControlSheetEntity";
import { DiagramNodeProps } from "./diagramTools";

const Gauge = ({ radius = 200, value = 0, ...props }) => {
  const startColor = "#6495ed"; // cornflowerblue
  const endColor = "#dc143c"; // crimson
  const interpolate = interpolateRgb(startColor, endColor);
  const fillColor = interpolate(value / 100);
  const gradientStops = [
    {
      key: "0%",
      stopColor: color(fillColor).darker(0.5).toString(),
      stopOpacity: 1,
      offset: "0%",
    },
    {
      key: "50%",
      stopColor: fillColor,
      stopOpacity: 0.75,
      offset: "50%",
    },
    {
      key: "100%",
      stopColor: color(fillColor).brighter(0.5).toString(),
      stopOpacity: 0.5,
      offset: "100%",
    },
  ];

  return (
    <LiquidFillGauge
      {...props}
      width={radius * 2}
      height={radius * 2}
      value={value}
      percent="%"
      textSize={1}
      textOffsetX={0}
      textOffsetY={0}
      textRenderer={({ value, width, height, textSize, percent }) => {
        value = Math.round(value);
        const radius = Math.min(height / 2, width / 2);
        const textPixels = (textSize * radius) / 2;
        const valueStyle = {
          fontSize: textPixels,
        };
        const percentStyle = {
          fontSize: textPixels * 0.6,
        };

        return (
          <tspan>
            <tspan className="value" style={valueStyle}>
              {value}
            </tspan>
            <tspan style={percentStyle}>{percent}</tspan>
          </tspan>
        );
      }}
      riseAnimation
      waveAnimation
      waveFrequency={2}
      waveAmplitude={1}
      gradient
      gradientStops={gradientStops}
      circleStyle={{
        fill: fillColor,
      }}
      waveStyle={{
        fill: fillColor,
      }}
      textStyle={{
        fill: color("#444").toString(),
        fontFamily: "Arial",
      }}
      waveTextStyle={{
        fill: color("#fff").toString(),
        fontFamily: "Arial",
      }}
    />
  );
};

export function ContainerLevelValueNode(props: DiagramNodeProps) {
  const [value, setValue] = useState();

  const startColor = "#6495ed"; // cornflowerblue
  const endColor = "#dc143c"; // crimson

  useEffect(() => {
    const uid = props.data?.connections && props.data?.connections[0].uniqueId;

    if (uid) {
      window.onConnectionValues[uid] = (data) => {
        setValue(data.Value);
      };

      return () => {
        window.onConnectionValues[uid] = undefined;
      };
    }
  }, [props.data?.connections]);

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
        <Gauge
          style={{ margin: "0 auto 20px auto" }}
          radius={80}
          value={value}
        />
      </NodeWrapper>
    </>
  );
}

ContainerLevelValueNode.emptyGenerator = function () {
  const id = uuidv4();
  return {
    type: "containerLevelValueNode",
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
