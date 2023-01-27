import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const getAccessToken = createAsyncThunk("login/getAccessToken", async (data, thunkAPI) => {

        const {rejectWithValue} = thunkAPI;
        
        
  try {
    
    axios.defaults.withCredentials = true;

    const response = await axios.get("http://localhost:8000/sanctum/csrf-cookie").then(response => {
        
    const token = response.config.headers.get("X-XSRF-TOKEN")
    
    axios({
        method: "post",
        data: {
            email: data.email,
            password: data.password,
        },
        url: "http://localhost:8000/api/admin/auth/login",
        
        headers:{
            "Accept": "application/json",
            
            "csrf_token": token,
        }
    }).then(response => {
        console.log(response.data);
    })

    })

    const result =  response

    console.log(result);
    
    //localStorage.setItem("accessToken", data.accessToken)

  } catch (error) {
    
   return rejectWithValue(error)
  }

})

const initialState = {
    data:[]
}

const LoginSlice = createSlice({
    name:"login",
    initialState,
    reducers: {
        
    },
    extraReducers : {
        // Login Products
        [getAccessToken.pending]: (state, action) => {
            console.log(action.payload);
        },
        [getAccessToken.fulfilled]: (state, action) => {
            console.log(action.payload);
        },
        [getAccessToken.rejected]: (state, action) => {
            console.log(action.payload);
        },
        
    }
})

export const {login} = LoginSlice.actions

export default LoginSlice.reducer