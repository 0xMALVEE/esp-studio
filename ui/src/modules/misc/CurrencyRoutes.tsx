import { CurrencyNavigationTools } from "src/sdk/fireback/modules/currency/currency-navigation-tools";
import { Route } from "react-router-dom";
import { CurrencyArchiveScreen } from "./CurrencyArchiveScreen";
import { CurrencyEntityManager } from "./CurrencyEntityManager";
import { CurrencySingleScreen } from "./CurrencySingleScreen";

export const useCurrencyRoutes = () => {
  return (
    <>
      <Route
        element={<CurrencyArchiveScreen />}
        path={CurrencyNavigationTools.Rquery}
      ></Route>

      <Route
        element={<CurrencyEntityManager />}
        path={CurrencyNavigationTools.Rcreate}
      ></Route>

      <Route
        element={<CurrencyEntityManager />}
        path={CurrencyNavigationTools.Redit}
      ></Route>

      <Route
        element={<CurrencySingleScreen />}
        path={CurrencyNavigationTools.Rsingle}
      ></Route>
    </>
  );
};
