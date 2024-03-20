import { Ref, useEffect, useRef } from "react";
var Highcharts = require("highcharts");

declare var Highcharts: any;

function drawChart(ref: Ref<any>) {
  const data = {
    for: "Temperature",
    unit: "Value",
    chartColor: "blue",
    series: [[]],
  };

  return Highcharts.chart(ref, {
    chart: {
      zoomType: "x",
    },
    tooltip: {
      useHTML: true,
    },
    xAxis: {
      type: "datetime",
    },
    plotOptions: {
      area: {
        fillColor: {
          linearGradient: {
            x1: 0,
            y1: 0,
            x2: 0,
            y2: 1,
          },
          stops: [
            [0, Highcharts.getOptions().colors[0]],
            [
              1,
              Highcharts.color(Highcharts.getOptions().colors[0])
                .setOpacity(0)
                .get("rgba"),
            ],
          ],
        },
      },
    },
    title: {
      text: null,
    },
    series: [
      {
        name: data.unit,
        data: data.series,
        type: "spline",
        color: data.chartColor,
        showInLegend: false,
        marker: {
          enabled: false,
        },
      },
    ],
    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 500,
          },
          chartOptions: {
            legend: {
              layout: "horizontal",
              align: "center",
              verticalAlign: "bottom",
            },
          },
        },
      ],
    },
  });
}

export function SimpleBarChart({ items }: { items: Array<any> }) {
  const data = items.map((item) => {
    const d = item.created / 1000000;
    return [d, item.valueFloat];
  });
  console.log(1, data);

  const chartRef = useRef<any>();
  const elRef = useRef<any>();

  useEffect(() => {
    const chart = drawChart(elRef.current);
    chartRef.current = chart;
  }, [elRef.current]);

  useEffect(() => {
    chartRef.current.series[0].setData(data);
  }, [items]);

  return (
    <>
      <div
        style={{ height: "250px", width: "100%" }}
        ref={elRef}
        className="chart"
      ></div>
    </>
  );
}
