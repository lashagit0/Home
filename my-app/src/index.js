import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductPage from "./pages/ProductPage1/ProductPage";
import ProductPage2 from "./pages/ProductPage2/ProductPage2";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/ProductPage",
    element: <ProductPage />,
  },
  {
    path: "/ProductPage2",
    element: <ProductPage2 />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
