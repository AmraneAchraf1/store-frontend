import { configureStore } from "@reduxjs/toolkit";
import AdminSlice from "./Reducer/Admin/AdminSlice";
import LoginSlice from "./Reducer/Admin/auth/LoginSlice";
import LogoutSlice from "./Reducer/Admin/auth/LogoutSlice";
import CartSlice from "./Reducer/Cart/CartSlice";
import ProductSlice from "./Reducer/Product/ProductSlice";

const store = configureStore({
    reducer:{
        // admin: AdminSlice
        admin: AdminSlice ,
        adminlogin:LoginSlice,
        adminlogout:LogoutSlice,

        // product: ProductSlice
        product:ProductSlice,
        
        // Cart: CartSlice
        cart:CartSlice ,


    }
});

export default store;