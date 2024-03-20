import { PaymentRequestNavigationTools } from "src/sdk/academy/modules/wallet/payment-request-navigation-tools";
import { VirtualAccountNavigationTools } from "src/sdk/academy/modules/wallet/virtual-account-navigation-tools";
import { VirtualTransactionNavigationTools } from "src/sdk/academy/modules/wallet/virtual-transaction-navigation-tools";
import { Route } from "react-router-dom";
import { PaymentRequestArchiveScreen } from "./PaymentRequestArchiveScreen";
import { PaymentRequestEntityManager } from "./PaymentRequestEntityManager";
import { PaymentRequestSingleScreen } from "./PaymentRequestSingleScreen";
import { VirtualAccountArchiveScreen } from "./VirtualAccountArchiveScreen";
import { VirtualAccountEntityManager } from "./VirtualAccountEntityManager";
import { VirtualAccountSingleScreen } from "./VirtualAccountSingleScreen";
import { VirtualTransactionSingleScreen } from "./VirtualTransactionSingleScreen";

export const useWalletModuleRoutes = () => {
  return (
    <>
      <Route
        element={<PaymentRequestEntityManager />}
        path={PaymentRequestNavigationTools.Rcreate}
      ></Route>

      <Route
        element={<PaymentRequestSingleScreen />}
        path={PaymentRequestNavigationTools.Rsingle}
      ></Route>

      <Route
        element={<PaymentRequestArchiveScreen />}
        path={PaymentRequestNavigationTools.Rquery}
      ></Route>
      <Route
        element={<VirtualAccountArchiveScreen />}
        path={VirtualAccountNavigationTools.Rquery}
      ></Route>

      <Route
        element={<VirtualAccountEntityManager />}
        path={VirtualAccountNavigationTools.Rcreate}
      ></Route>

      <Route
        element={<VirtualAccountEntityManager />}
        path={VirtualAccountNavigationTools.Redit}
      ></Route>

      <Route
        element={<VirtualAccountSingleScreen />}
        path={VirtualAccountNavigationTools.Rsingle}
      ></Route>

      <Route
        element={<VirtualTransactionSingleScreen />}
        path={VirtualTransactionNavigationTools.Rsingle}
      ></Route>
    </>
  );
};
