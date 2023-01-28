import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import "./index.css";
import store from "./store";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Product from "./pages/Product";

import Index from "./layout/Index";
import Auth from "./layout/Auth";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

// admin routes
import Layout from "./layout/admin/Layout";
import AdminAuth from "./layout/AdminAuth";
import AdminLogin from "./pages/admin/auth/AdminLogin";
import Dashboard from "./pages/admin/Dashboard";
import ErrorPage from "./pages/ErrorPage";
import IsAuth from "./pages/IsAuth";

const router = createBrowserRouter([
  //User routes
  {
    path: "/",
    element: <Index />,
    errorElement:<ErrorPage/>,
    children: [
      {
        index: true,
        path: "/",
        element: <Product />,
      },
    ],
  },

  //Auth User routes
  {
    path: "/auth",
    element: <Auth />,
    errorElement:<ErrorPage/>,
    children: [
      {
        index: true,
        path: "/auth",
        element: <Login />,
      },
      {
        
        path: "login",
        element: <Login />,
      },
      {
        
        path: "register",
        element: <Register />,
      },


    ],
  },

  //Admin routes
  {
    path: "admin",
    element: <Layout />,
    errorElement:<ErrorPage/>,
    children: [
      {
        index: true,
        path: "",
        element: <Product/>,
      },
      {
        
        path: "dashboard",
        element: <IsAuth> <Dashboard /></IsAuth>,
      },
    ],
  },
  

  

  //Auth Admin routes
  {
    path: "admin/auth",
    element: <AdminAuth />,
    errorElement:<ErrorPage/>,
    children: [
      {
        index: true,
        path: "",
        element: <AdminLogin />,
      },
      
      {
        
        path: "login",
        element: <AdminLogin />,
      },

    ],
  },


]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
