import { AppConfigContext } from "@/hooks/appConfigTools";
import { useT } from "@/hooks/useT";

import { mockExecFn } from "@/hooks/mock-tools";
import { RemoteQueryProvider as EspStudioProvider } from "src/sdk/esp-studio/core/react-tools";
import { RemoteQueryContext as FirebackContext } from "src/sdk/fireback/core/react-tools";
import React, { useContext, useRef } from "react";
import { EspStudioMockServer } from "./mockServer";
import { useLocale } from "@/hooks/useLocale";

export function WithEspStudio({ children }: { children: React.ReactNode }) {
  const { config } = useContext(AppConfigContext);
  const { locale } = useLocale();
  const { session, selectedUrw } = useContext(FirebackContext);
  const mockServer = useRef<any>(EspStudioMockServer);
  const t = useT();

  return (
    <EspStudioProvider
      token={session?.token}
      identifier="espstudio"
      remote={process.env.REACT_APP_REMOTE_SERVICE}
      preferredAcceptLanguage={locale || config.interfaceLanguage}
      selectedUrw={selectedUrw}
      /// #if process.env.REACT_APP_INACCURATE_MOCK_MODE == "true"
      defaultExecFn={() => {
        return (options: any) => mockExecFn(options, mockServer.current, t);
      }}
      /// #endif
    >
      {children}
    </EspStudioProvider>
  );
}
