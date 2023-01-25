import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import './index.css';
import store from './store';

import {
  createBrowserRouter,
  RouterProvider,
} 
from "react-router-dom";
import Product from './pages/Product';
import Index from './layout/Index';




const router = createBrowserRouter([
  { path: '/',
    element : <Index/>,
  
    children : [
      { 
        index:true,
        path: '/',
        element : <Product/>,
      }


    ]


}
])

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  
  <Provider store={store}>

      <RouterProvider router={router}/>
      
  </Provider>
    
);

