import { configureStore } from "@reduxjs/toolkit";
import AdminSlice from "./Reducer/Admin/AdminSlice";
import LoginSlice from "./Reducer/Admin/auth/LoginSlice";
import LogoutSlice from "./Reducer/Admin/auth/LogoutSlice";
import ProductSlice from "./Reducer/Product/ProductSlice";

const store = configureStore({
    reducer:{
        admin: AdminSlice ,
        adminlogin:LoginSlice,
        adminlogout:LogoutSlice,
        product:ProductSlice,

    }
});

export default store;