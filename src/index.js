import React from "react";
import ReactDOM from "react-dom/client";
//<= Global styles =>
import "./index.css";

//<= Redux =>
import { Provider } from "react-redux";
import store from "./store";

//<=  Router =>
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Product from "./pages/Product";

//<= Layouts  =>
// ---------------- User Layout -----------------
import Auth from "./layout/Auth";
import Index from "./layout/Index";
// ---------------- Admin Layout ----------------
import Layout from "./layout/admin/Layout";
import AdminAuth from "./layout/AdminAuth";
// ----------------------------------------------

//<= Pages  =>
// 404 
import ErrorPage from "./pages/ErrorPage";
// Check if the user is logged in
import IsAuth from "./pages/IsAuth";
//----------------- User Pages ------------------

//--- Auth Pages ----------------
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
//--- Other Pages ----------------
import Cart from "./pages/Cart";
import Landing from "./pages/Landing";

//----------------- Admin Pages ------------------

//--- Auth Pages ----------------
import AdminLogin from "./pages/admin/auth/AdminLogin";
//-- dashboard Pages ----------------
import Dashboard from "./pages/admin/Dashboard";
import Users from "./pages/admin/Users";
import AdminProducts from "./pages/admin/AdminProducts";
//----------------------------------------------------------------

// Bootstrap and Theming
import "bootstrap/dist/css/bootstrap.rtl.min.css"
import "bootstrap/dist/css/bootstrap.min.css"
import { ThemeProvider } from "react-bootstrap";





const router = createBrowserRouter([
  // =========  User routes  =========
  {
    path: "/",
    element: <Index />,
    errorElement:<ErrorPage/>,
    children: [
      {
       
        path: "",
        element: <Landing />,

        children : [
          {
            index: true,
            path:"",
            
            element: <Landing />,
          },
          {
           
            path:"events",
            element: <Landing />,
          },
          {
            
            path:"lastProducts",
            element: <Landing />,
          }
        ]
      },

      {
        
        path: "cart",
        element: <Cart />,
      },
      {
        
        path: "products",
        element: <Product />,
      },

    ],
  },

  //--- Auth User routes
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

  // ========= Admin routes =========
  {
    path: "admin",
    element: <IsAuth> <Layout /> </IsAuth>,
    errorElement:<ErrorPage/>,
    children: [
      {
        index: true,
        path: "",
        element: <IsAuth> <Dashboard /></IsAuth>,
      },
      {
        
        path: "dashboard",
        element: <IsAuth> <Dashboard /></IsAuth>,
      },
      {
        
        path: "users",
        element: <IsAuth> <Users /></IsAuth>,
      },
      {
        
        path: "products",
        // To load data before component is rendered
        // loader :async ()=>{
          
        //   const products =  await store.dispatch(getProducts());

        //   return products;
        // },
        element: <IsAuth> <AdminProducts/> </IsAuth>,
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
  <ThemeProvider dir="rtl">
    <RouterProvider router={router} />
  </ThemeProvider>
    
  </Provider>
);
