// @ts-nocheck

import React from "react";
import ReactDOM from "react-dom/client";

/// #if TARGET_APP == 'esp-studio'
import App from "./apps/esp-studio/App";

/// #endif

/// #if TARGET_APP == 'academy'
import App from "./apps/academy/App";

/// #endif

/// #if TARGET_APP == 'fireback'
import App from "./apps/fireback/App";

/// #endif

/// #if TARGET_APP == 'polish-b1-simulator'
import App from "./apps/polish-b1-simulator/App";

/// #endif

/// #if TARGET_APP == 'loyalty'

import App from "./apps/loyalty/App";

/// #endif

/// #if TARGET_APP == 'moshtariancheck'
import App from "./apps/moshtariancheck/App";

/// #endif

/// #if TARGET_APP == 'react-go-dashboard'

import App from "./apps/react-go-dashboard/App";

/// #endif

// @fireback-append-app

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
