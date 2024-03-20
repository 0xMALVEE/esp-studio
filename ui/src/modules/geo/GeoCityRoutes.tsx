import { Route } from "react-router-dom";
import { GeoCityArchiveScreen } from "./GeoCityArchiveScreen";
import { GeoCityEntityManager } from "./GeoCityEntityManager";
import { GeoCitySingleScreen } from "./GeoCitySingleScreen";
import { GeoCityNavigationTools } from "src/sdk/academy/modules/geo/geo-city-navigation-tools";

export function useGeoCityRoutes() {
  return (
    <>
      <Route
        element={<GeoCityEntityManager />}
        path={GeoCityNavigationTools.Rcreate}
      />
      <Route
        element={<GeoCitySingleScreen />}
        path={GeoCityNavigationTools.Rsingle}
      ></Route>
      <Route
        element={<GeoCityEntityManager />}
        path={GeoCityNavigationTools.Redit}
      ></Route>
      <Route
        element={<GeoCityArchiveScreen />}
        path={GeoCityNavigationTools.Rquery}
      ></Route>
    </>
  );
}
