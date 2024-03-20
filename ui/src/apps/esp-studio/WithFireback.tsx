import { AppConfigContext } from "@/hooks/appConfigTools";
import { useT } from "@/hooks/useT";

import { mockExecFn } from "@/hooks/mock-tools";
import { RemoteQueryProvider as FirebackQueryProvider } from "src/sdk/fireback/core/react-tools";
import React, { useContext, useRef } from "react";
import { EspStudioMockServer } from "./mockServer";
import { useLocale } from "@/hooks/useLocale";

export function WithFireback({ children }: { children: React.ReactNode }) {
  const { config } = useContext(AppConfigContext);
  const espStudioMockServer = useRef<any>(EspStudioMockServer);
  const { locale } = useLocale();

  const t = useT();

  return (
    <FirebackQueryProvider
      preferredAcceptLanguage={locale || config.interfaceLanguage}
      identifier="fireback"
      remote={process.env.REACT_APP_REMOTE_SERVICE}
      /// #if process.env.REACT_APP_INACCURATE_MOCK_MODE == "true"
      defaultExecFn={() => {
        return (options: any) =>
          mockExecFn(options, espStudioMockServer.current, t);
      }}
      /// #endif
      // defaultExecFn={() => (options: any) =>
      //   mockExecFn(options, espStudioMockServer.current, t)}
    >
      {children}
    </FirebackQueryProvider>
  );
}
