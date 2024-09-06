import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { StripeProvider } from "./Context/StripeProvider.tsx";
import { ThemeProvider } from "./Context/ThemeContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <StripeProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </StripeProvider>
  </React.StrictMode>
);
