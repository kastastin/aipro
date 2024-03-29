import React from "react";
import ReactDOM from "react-dom/client";
import { ErrorBoundary } from "react-error-boundary";
import { ConfigProvider } from "antd";

import App from "./App.jsx";
import ErrorFallback from "./pages/ErrorFallback/ErrorFallback.jsx";

import "antd/dist/reset.css";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => window.location.replace("/")}
    >
      <ConfigProvider
        componentSize="middle"
        theme={{
          token: {
            colorPrimary: "#24a1e0",
          },
        }}
      >
        <App />
      </ConfigProvider>
    </ErrorBoundary>
  </React.StrictMode>
);
