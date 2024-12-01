import React from "react";
import { createRoot } from "react-dom/client";
// import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { Auth0Provider } from "@auth0/auth0-react";
import Dashboard from "./pages/Dashboard";

const root = createRoot(document.getElementById("root"));

root.render(
  <Auth0Provider
    domain="dev-w45td68o1eiv4l8j.us.auth0.com"
    clientId="4Vvqd4ImcRhmARtgjG6wpZcICoiQH6aT"
    redirectUri = {window.location.origin + "/dashboard" }
  >
     <App />
    {/* <BrowserRouter>
      <App />
    </BrowserRouter> */}
  </Auth0Provider>
);
