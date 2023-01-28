import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const getAccessToken = createAsyncThunk("login/getAccessToken", async (data, thunkAPI) => {
        const {rejectWithValue} = thunkAPI;
  try {
    
    const auth = await axios({
        method: "post",
        data: {
            email: data.email,
            password: data.password,
        },
        url: "http://localhost:8000/api/admin/auth/login",
        
        headers:{
            "Accept": "application/json",
        }
    })

    const res = await auth.data

    localStorage.setItem("accessToken", res.access_token)
    return res
    
    

    // const csrf = await axios.get("http://localhost:8000/sanctum/csrf-cookie").then(response => {
    // const token = response.config.headers.get("X-XSRF-TOKEN")
    // console.log(token);
    // })
  } catch (error) {
   return rejectWithValue(error.message)
  }

})

const initialState = {
    accessToken:"",
    tokens:[],
    admin:[],
    isLoading:false,
    isRejected:false,
    msg:"",
    isAuth:false,
}

const LoginSlice = createSlice({
    name:"login",
    initialState,
    reducers: {
        
    },
    extraReducers : {
        // Login Products
        [getAccessToken.pending]: (state, action) => {
            state.isLoading = true;
            state.isRejected = false;
          
        },

        [getAccessToken.fulfilled]: (state, action) => {
            state.isRejected = false;
            state.isLoading = false;
            state.accessToken = action.payload.access_token;
            state.tokens = action.payload.token;
            state.admin = action.payload.admin;
            state.msg = action.payload.msg;

            if(localStorage.getItem("accessToken") === state.accessToken){
                state.isAuth = true;
            }
            else{
                state.isAuth = false;
            }
        },

        [getAccessToken.rejected]: (state, action) => {
            state.isRejected = true;
            state.isLoading = false;
            state.msg = "Error";
        },
        
    }
})

export const {login} = LoginSlice.actions

export default LoginSlice.reducer