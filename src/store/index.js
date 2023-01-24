import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./Reducer/Product/ProductSlice";

const store = configureStore({
    reducer:{
        
        product:ProductSlice,
    }
});

export default store;