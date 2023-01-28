import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { authAdmin } from '../../store/Reducer/Admin/AdminSlice'
import { revokeToken } from '../../store/Reducer/Admin/auth/LogoutSlice'

const Dashboard = () => {

    const dispatch = useDispatch()

    const {admin} = useSelector((state) => state.admin)
    const navigate = useNavigate()
    console.log(admin);


    useEffect(()=>{
        dispatch(authAdmin())
    }, [dispatch])

    const handelSubmit = (e) => {
        e.preventDefault()
        if(dispatch(revokeToken())){
            navigate("/admin/auth", {
                replace:true,

            })
        }
    }


    return (
        <div>
        
        <form onSubmit={handelSubmit} method="post">
            <label >LogOut</label>
            <input type="submit" value="Submit" />
        </form>
        
        </div>
    )
}

export default Dashboard