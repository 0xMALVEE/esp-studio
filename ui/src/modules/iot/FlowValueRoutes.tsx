import { Route } from "react-router-dom";
import { FlowValueArchiveScreen } from "./FlowValueArchiveScreen";
import { FlowValueEntityManager } from "./FlowValueEntityManager";
import { FlowValueSingleScreen } from "./FlowValueSingleScreen";
import { FlowValueCommonReport } from "./FlowValueCommonReport";
import { FlowValueEntity } from "@/sdk/esp-studio/modules/iot/FlowValueEntity";

export function useFlowValueRoutes() {
  return (
    <>
      <Route
        element={<FlowValueEntityManager />}
        path={FlowValueEntity.Navigation.Rcreate}
      />
      <Route element={<FlowValueCommonReport />} path={"flow-value/report"} />
      <Route
        element={<FlowValueSingleScreen />}
        path={FlowValueEntity.Navigation.Rsingle}
      ></Route>
      <Route
        element={<FlowValueEntityManager />}
        path={FlowValueEntity.Navigation.Redit}
      ></Route>
      <Route
        element={<FlowValueArchiveScreen />}
        path={FlowValueEntity.Navigation.Rquery}
      ></Route>
    </>
  );
}
