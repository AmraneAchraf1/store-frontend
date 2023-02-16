import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//Add to Cart
// typePrefix , pyloadCreatore(data, thunkAPI)
export  const addToCart = createAsyncThunk("cart/addToCart", async (data, thunkAPI)=> {

    const {rejectWithValue} = thunkAPI


    const userCartId = ()=>{
        // Check if localStorage contains the userCartId
        const cartId = localStorage.getItem('userCartId');

        if (cartId !== undefined || cartId !== null || cartId.length >0 ) {
            return cartId;
        }else{
            return
        }
        
    }

    try {
        const auth = await axios({
            method: "post",
            url: "http://localhost:8000/api/cart",
            data:{
                "product_id":data.id,
                "user_cart_id":userCartId(),
            },
            headers:{
                "Accept": "application/json",
                "Authorization":`Bearer ${localStorage.getItem("accessToken")}`
            }
        })
    
        const res = await auth.data
        return res
        
    } catch (error) {
        
        return rejectWithValue(error)
    }

})


// Get Cart Items

export const getCartItems =createAsyncThunk("cart/getCartItems", async (data, thunkAPI)=>{

    const {rejectWithValue} = thunkAPI

    const userCartId = localStorage.getItem("userCartId")

    try {
        const res = await axios({
            method: "GET",
            data,
            url:`http://localhost:8000/api/cart?user_cart_id=${userCartId}`,
            headers: {
                "Accept": "application/json",
            },
            
        })
        const items = await res.data
        return items
    } catch (error) {
        return rejectWithValue(error)   //handle error
    }
})

 const CartSlice = createSlice({
    name:"cart",
    initialState: {
        cartItems: [],
        data: [],
        isLoading: false,
        isRejected: false
    },
    reducers: {
        //
    },
    extraReducers : {
        // Add to Cart
        [addToCart.pending] : (state, action)=>{
            state.isLoading = true;

        },
        [addToCart.fulfilled] : (state, action)=>{
            state.isLoading = false;
               
            if(action.payload.msg === 'Access denied'){
                return 
            }
            
            localStorage.setItem("userCartId", action.payload.user_cart_id);
            
            if(localStorage.getItem("cartItems")){
                state.cartItems = JSON.parse(localStorage.getItem("cartItems"))
            }

            state.cartItems.push(action.payload.product_id)
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
              
        },
        [addToCart.rejected] : (state, action)=>{
            state.isLoading = false;
            console.log(action.payload);
        },

        // get all cart items

        [getCartItems.pending] : (state, action)=>{
            state.isLoading = true;
        },
        [getCartItems.fulfilled] : (state, action)=>{
            state.isLoading = false;
            state.data = [...action.payload]
        },
        [getCartItems.rejected] : (state, action)=>{
            state.isLoading = false;
            console.log(action.payload);
        },





        
    }
})


export default CartSlice.reducer