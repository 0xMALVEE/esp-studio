import { ErrorBoundary } from "react-error-boundary";
import "react-toastify/dist/ReactToastify.css";

import { AuthProvider } from "@/helpers/authContext";
import { UIStateProvider } from "@/helpers/uiStateContext";
import { AppConfigProvider } from "@/hooks/appConfigTools";

import { Fallback } from "@/components/fallback/Fallback";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, HashRouter } from "react-router-dom";
import { ActionMenuProvider } from "../../components/action-menu/ActionMenu";
import { ApplicationRoutes } from "./ApplicationRoutes";
import { WithEspStudio } from "./WithEspStudio";
import { WithFireback } from "./WithFireback";

import "./AppStyles";
import { ToastContainer } from "react-toastify";
import { ReactiveSearchProvider } from "@/components/reactive-search/ReactiveSearchContext";
import { ModalManager, ModalProvider } from "@/components/modal/Modal";
import { WindowDrop } from "@/components/window-drop/WindowDrop";

const useHashRouter = process.env.REACT_APP_USE_HASH_ROUTER === "true";
const Router = useHashRouter ? HashRouter : BrowserRouter;

function App() {
  const [queryClient] = React.useState(() => new QueryClient());

  return (
    <AuthProvider>
      <ErrorBoundary
        FallbackComponent={Fallback}
        onReset={(details) => {
          // Reset the state of your app so the error doesn't happen again
        }}
      >
        <Router basename={useHashRouter ? undefined : process.env.PUBLIC_URL}>
          <AppConfigProvider
            initialConfig={{ remote: process.env.REACT_APP_REMOTE_SERVICE }}
          >
            <WithFireback>
              <WithEspStudio>
                <UIStateProvider>
                  <ReactiveSearchProvider>
                    <ActionMenuProvider>
                      <WindowDrop>
                        <QueryClientProvider client={queryClient}>
                          <ModalProvider>
                            <ApplicationRoutes />
                            <ModalManager />
                          </ModalProvider>
                        </QueryClientProvider>
                      </WindowDrop>
                      <ToastContainer />
                    </ActionMenuProvider>
                  </ReactiveSearchProvider>
                </UIStateProvider>
              </WithEspStudio>
            </WithFireback>
          </AppConfigProvider>
        </Router>
      </ErrorBoundary>
      <ToastContainer />
    </AuthProvider>
  );
}

export default App;
