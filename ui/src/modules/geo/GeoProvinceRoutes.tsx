import { Route } from "react-router-dom";
import { GeoProvinceArchiveScreen } from "./GeoProvinceArchiveScreen";
import { GeoProvinceEntityManager } from "./GeoProvinceEntityManager";
import { GeoProvinceSingleScreen } from "./GeoProvinceSingleScreen";
import { GeoProvinceNavigationTools } from "src/sdk/academy/modules/geo/geo-province-navigation-tools";

export function useGeoProvinceRoutes() {
  return (
    <>
      <Route
        element={<GeoProvinceEntityManager />}
        path={GeoProvinceNavigationTools.Rcreate}
      />
      <Route
        element={<GeoProvinceSingleScreen />}
        path={GeoProvinceNavigationTools.Rsingle}
      ></Route>
      <Route
        element={<GeoProvinceEntityManager />}
        path={GeoProvinceNavigationTools.Redit}
      ></Route>
      <Route
        element={<GeoProvinceArchiveScreen />}
        path={GeoProvinceNavigationTools.Rquery}
      ></Route>
    </>
  );
}
