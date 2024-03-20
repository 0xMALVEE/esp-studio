import { Route } from "react-router-dom";
import { GeoLocationArchiveScreen } from "./GeoLocationArchiveScreen";
import { GeoLocationEntityManager } from "./GeoLocationEntityManager";
import { GeoLocationSingleScreen } from "./GeoLocationSingleScreen";
import { GeoLocationNavigationTools } from "src/sdk/moshtariancheck/modules/geo/geo-location-navigation-tools";

export function useGeoLocationRoutes() {
  return (
    <>
      <Route
        element={<GeoLocationEntityManager />}
        path={GeoLocationNavigationTools.Rcreate}
      />
      <Route
        element={<GeoLocationSingleScreen />}
        path={GeoLocationNavigationTools.Rsingle}
      ></Route>
      <Route
        element={<GeoLocationEntityManager />}
        path={GeoLocationNavigationTools.Redit}
      ></Route>
      <Route
        element={<GeoLocationArchiveScreen />}
        path={GeoLocationNavigationTools.Rquery}
      ></Route>
    </>
  );
}
