import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const revokeToken = createAsyncThunk("logout/revokeToken", async (data, thunkAPI) => {
        const {rejectWithValue} = thunkAPI;
  try {
    
    const auth = await axios({
        method: "post",
        url: "http://localhost:8000/api/admin/auth/logout",
        
        headers:{
            "Accept": "application/json",
            "Authorization":`Bearer ${localStorage.getItem("accessToken")}`,
        }
    })

    const res = await auth.data
    localStorage.removeItem("accessToken")
    
    return res
    
 
  } catch (error) {
   return rejectWithValue(error.message)
  }

})

const initialState = {
    msg:"",
    isLoading: false,
    isRejected: false,


}

const LogoutSlice = createSlice({
    name:"logout",
    initialState,
    reducers: {
        
    },
    extraReducers : {
        // Logout from admin
        [revokeToken.pending]: (state, action) => {
            state.msg = action.payload
            state.isLoading = true
        
        },
        [revokeToken.fulfilled]: (state, action) => {
            state.msg = action.payload
            state.isLoading = false
        
        },
        [revokeToken.rejected]: (state, action) => {
            state.msg = action.payload
            state.isLoading = false
        
        },
    }


})

export const {logout} = LogoutSlice.actions

export default LogoutSlice.reducer