import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductPage from "./pages/ProductPage1/ProductPage";
import ProductPage2 from "./pages/ProductPage2/ProductPage2";
import ProductPage3 from "./pages/ProductPage3/ProductPage3";
import ProductPage4 from "./pages/ProductPage4/ProductPage4";
import ProductPage5 from "./pages/ProductPage5/ProductPage5";
import ProductPage6 from "./pages/ProductPage6/ProductPage6";
import ProductPage7 from "./pages/ProductPage7/ProductPage7";
import ProductPage8 from "./pages/ProductPage8/ProductPage8";

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
  {
    path: "/ProductPage3",
    element: <ProductPage3 />,
  },
  {
    path: "/ProductPage4",
    element: <ProductPage4 />,
  },
  {
    path: "/ProductPage5",
    element: <ProductPage5 />,
  },
  {
    path: "/ProductPage6",
    element: <ProductPage6 />,
  },
  {
    path: "/ProductPage7",
    element: <ProductPage7 />,
  },
  {
    path: "/ProductPage8",
    element: <ProductPage8 />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
