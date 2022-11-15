import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ProviderContext } from "./Context/Lang";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <ProviderContext>
        <App />
      </ProviderContext>
    </React.StrictMode>
  </BrowserRouter>
);
