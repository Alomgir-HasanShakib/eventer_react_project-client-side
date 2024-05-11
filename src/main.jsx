import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Router/Router";
import { HelmetProvider } from "react-helmet-async";
import Authentication from "./Context/Authentication/Authentication";
// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <Authentication>
        <RouterProvider router={router}></RouterProvider>
      </Authentication>
    </HelmetProvider>
  </React.StrictMode>
);
