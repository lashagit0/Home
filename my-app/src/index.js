import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductPage from "./pages/ProductPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/ProductPage",
    element: <ProductPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
