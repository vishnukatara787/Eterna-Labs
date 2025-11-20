// ...existing code...
import React from "react";
import { createRoot } from "react-dom/client";
// ...existing code...
// replace BrowserRouter with HashRouter if using react-router
import { HashRouter } from "react-router-dom";
import App from "./App";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);
// ...existing code...