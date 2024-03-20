import { Route } from "react-router-dom";
import { GeoCountryArchiveScreen } from "./GeoCountryArchiveScreen";
import { GeoCountryEntityManager } from "./GeoCountryEntityManager";
import { GeoCountrySingleScreen } from "./GeoCountrySingleScreen";
import { GeoCountryNavigationTools } from "src/sdk/academy/modules/geo/geo-country-navigation-tools";

export function useGeoCountryRoutes() {
  return (
    <>
      <Route
        element={<GeoCountryEntityManager />}
        path={GeoCountryNavigationTools.Rcreate}
      />
      <Route
        element={<GeoCountrySingleScreen />}
        path={GeoCountryNavigationTools.Rsingle}
      ></Route>
      <Route
        element={<GeoCountryEntityManager />}
        path={GeoCountryNavigationTools.Redit}
      ></Route>
      <Route
        element={<GeoCountryArchiveScreen />}
        path={GeoCountryNavigationTools.Rquery}
      ></Route>
    </>
  );
}
