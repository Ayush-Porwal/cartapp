import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { PrimeReactProvider } from "primereact/api";

import App from "./App.tsx";
import Cart from "./pages/Cart/Cart.tsx";
import Signin from "./pages/Signin/Signin.tsx";
import Signup from "./pages/Signup/Signup.tsx";
import ErrorPage from "./pages/ErrorPage/ErrorPage.tsx";
import AddProduct from "./pages/AddProduct/AddProduct.tsx";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/signin",
    element: <Signin />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/add-product",
    element: <AddProduct />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <PrimeReactProvider>
      <RouterProvider router={router}></RouterProvider>
    </PrimeReactProvider>
  </React.StrictMode>
);
