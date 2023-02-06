import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


//getProducts
// typePrefix , pyloadCreatore
export const getProducts = createAsyncThunk(
  "product/getProducts",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const products = await fetch("http://127.0.0.1:8000/api/products", {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      });
      const res = await products.json();
      return res;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

//addProducts
// typePrefix , pyloadCreatore
export const addProducts = createAsyncThunk(
  "product/addProducts",
  async (data, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    try {
      const products = await axios({
        method: "POST",
        url: "http://127.0.0.1:8000/api/products",
        data,
        headers: {
          Accept: "application/json",

          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });

      const res = await products.data;
      return res;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);


//updateProduct
// typePrefix , pyloadCreatore
export const updateProduct = createAsyncThunk(
  "product/updateProduct",
  async (data, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;



    try {
      const products = await axios({
        method: "post",
        url: "http://127.0.0.1:8000/api/products/update/"+data.id,
        data: data,
        headers: {
            "Accept": "application/json",
            "Content-Type": "multipart/form-data",
            "Authorization": `Bearer ${localStorage.getItem("accessToken")}`,
          
        }
      })

      const res = await products.data;
      return res;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);


//removeProduct
// typePrefix , pyloadCreatore
export const removeProduct = createAsyncThunk(
  "product/removeProduct",
  async (data, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    try {
      const products = await axios({
        method: "DELETE",
        url: "http://127.0.0.1:8000/api/products/" + data,
        data: data,
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });

      const res = await products.data;
      return res;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);


const initialState = {
  data: [],
  msg: "",
  isLoading: false,
};


const ProductSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: {
    // Get Products
    [getProducts.pending]: (state, action) => {
      state.isLoading = true;
    },

    [getProducts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.data = [...action.payload];
    },

    [getProducts.rejected]: (state, action) => {
      state.isLoading = false;
    },

    // Add Products
    [addProducts.pending]: (state, action) => {},

    [addProducts.fulfilled]: (state, action) => {
      state.msg = action.payload;
      
      state.data.push(action.payload);
    },

    [addProducts.rejected]: (state, action) => {
      state.msg = action.payload;

    },

    // Remove Product
    [removeProduct.pending]: (state, action) => {
      console.log(state.msg);
    },
    [removeProduct.fulfilled]: (state, action) => {
      const product = state.data.filter(
        (product) => product.id !== action.payload.id
      );
      state.data = product;

      state.msg = action.payload.msg;
    },
    [removeProduct.rejected]: (state, action) => {
      console.log(state.msg);
      state.msg = action.payload;
    },

    // Update Products
    [updateProduct.pending]: (state, action) => {
      //state.isLoading = true;
    },
    [updateProduct.fulfilled]: (state, action) => {
      //state.isLoading = false;
      
      const product = state.data.filter((p)=>{
        return p.id !== action.payload.id
      })

      state.data = [action.payload, ...product]
    },
    [updateProduct.rejected]: (state, action) => {
     // state.isLoading = false;
      console.log(action.payload);
    },
  },
});

export const { test } = ProductSlice.actions;
export default ProductSlice.reducer;
