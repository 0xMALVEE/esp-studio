import { Route } from "react-router-dom";
import { GsmProviderArchiveScreen } from "./GsmProviderArchiveScreen";
import { GsmProviderEntityManager } from "./GsmProviderEntityManager";
import { GsmProviderSingleScreen } from "./GsmProviderSingleScreen";
import { GsmProviderNavigationTools } from "src/sdk/academy/modules/workspaces/gsm-provider-navigation-tools";

export function useGsmProviderRoutes() {
  return (
    <>
      <Route
        element={<GsmProviderEntityManager />}
        path={GsmProviderNavigationTools.Rcreate}
      />
      <Route
        element={<GsmProviderSingleScreen />}
        path={GsmProviderNavigationTools.Rsingle}
      ></Route>
      <Route
        element={<GsmProviderEntityManager />}
        path={GsmProviderNavigationTools.Redit}
      ></Route>
      <Route
        element={<GsmProviderArchiveScreen />}
        path={GsmProviderNavigationTools.Rquery}
      ></Route>
    </>
  );
}
