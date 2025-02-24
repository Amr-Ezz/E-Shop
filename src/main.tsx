import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { StripeProvider } from "./Context/StripeProvider.tsx";
import { ThemeProvider } from "./Context/ThemeContext.tsx";
import { Loader } from "./components/Loader/Loader.tsx";
import { LoaderProvider } from "./Context/LoaderContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <StripeProvider>
      <ThemeProvider>
        <LoaderProvider>
          <Suspense fallback={<Loader />}>
            <App />
          </Suspense>
        </LoaderProvider>
      </ThemeProvider>
    </StripeProvider>
  </React.StrictMode>
);
