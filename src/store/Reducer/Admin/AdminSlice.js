import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//admin
// typePrefix , pyloadCreatore
export  const authAdmin = createAsyncThunk("admin/authAdmin", async (_, thunkAPI)=> {
    const {rejectWithValue} = thunkAPI

            try {
                const auth = await axios({
                    method: "get",
                    
                    url: "http://localhost:8000/api/admin",
                    
                    headers:{
                        "Accept": "application/json",
                        "Authorization":`Bearer ${localStorage.getItem("accessToken")}`
                    }
                })
            
                const res = await auth.data
                return res
                
            } catch (error) {
                return rejectWithValue(error.message)
            }

})
const AdminSlice = createSlice({
    name:"admin",
    initialState: {
        admin: [

        ],
        isLoading: false,
        isRejected: false
    },
    reducers: {
        
    },
    extraReducers : {
        // Admin
        [authAdmin.pending]: (state, action) => {
            state.isLoading = true
        },
        [authAdmin.fulfilled]: (state, action) => {
            state.isLoading = false
            
            state.admin = action.payload
        },
        [authAdmin.rejected]: (state, action) => {
            state.isLoading = false
            state.admin = action.payload
        },
        
    }
})

export const {getAdmin} = AdminSlice.actions

export default AdminSlice.reducer