import { useState } from "react";
import { NumberPicker } from "./NumberPicker";
import { Chart } from "./Chart";
import BasicLayout from "./Grid";
import { DataNodeGrid } from "./DataNodeGrid";

export function Lalaland() {
  const [value, setValue] = useState<any>();

  return (
    <>
      <div>
        {/* <p>I put all experimental components here. Love you, Ali :)</p> */}
        {/* <NumberPicker canvasId="item1" onChange={(val) => setValue(val)} /> */}
        <DataNodeGrid />
        <BasicLayout />
        {/* <Chart value={value} /> */}
        <span>{value}</span>
      </div>
    </>
  );
}
