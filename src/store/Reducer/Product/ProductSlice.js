import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

//getProducts
// typePrefix , pyloadCreatore
export  const getProducts = createAsyncThunk("product/getProducts", async (_, thunkAPI)=> {
    const {rejectWithValue} = thunkAPI
            try {
                const products = await fetch("http://127.0.0.1:8000/api/products", {
                    method: "GET",
                    headers: {
                        "Accept": "application/json"
                    }
                })
                const res = products.json();
                return res;
            } catch (error) {
                return rejectWithValue(error)
            }

})


//addProducts
// typePrefix , pyloadCreatore
export  const addProducts = createAsyncThunk("product/addProducts", async (data, thunkAPI)=> {
    const {rejectWithValue} = thunkAPI
            try {
                const products = await fetch("http://127.0.0.1:8000/api/products", {
                    method: "POST",
                    headers: {

                        "Accept": "application/json"
                    }
                })

                const res = products.json();
                return res;
            } catch (error) {
                return rejectWithValue(error)
            }

})

const initialState = {
    data:[]
}

const ProductSlice = createSlice({
    name:"product",
    initialState,
    reducers: {
        
    },
    extraReducers : {
        // Get Products
        [getProducts.pending]:(state,action)=>{
            
        },
        
        [getProducts.fulfilled]:(state,action)=>{
            
            state.data = [...action.payload]
        },

        [getProducts.rejected]:(state,action)=>{
            console.log(action.payload)
        },


        
        // Add Products 
        [addProducts.pending]:(state,action)=>{
            console.log(action.payload)
        },
        
        [addProducts.fulfilled]:(state,action)=>{
            console.log(action.payload)
        },

        [addProducts.rejected]:(state,action)=>{}
    }
})

export const { addProduct, removeProduct } = ProductSlice.actions
export default ProductSlice.reducer