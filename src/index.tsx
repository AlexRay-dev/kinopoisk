import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {ThemeProvider} from "@mui/material";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import theme from "./core/theme/theme";
import {persistor, store} from "./core/store/store";
import {DevSupport} from "@react-buddy/ide-toolbox";
import {ComponentPreviews, useInitial} from "./dev";
import {PersistGate} from "redux-persist/integration/react";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ThemeProvider theme={theme}>
          <DevSupport ComponentPreviews={ComponentPreviews}
                      useInitialHook={useInitial}
          >
            <App/>
          </DevSupport>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </BrowserRouter>
);

