import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'


import { getAccessToken } from '../../../store/Reducer/Admin/auth/LoginSlice'

const AdminLogin = () => {

  const [email, setEmail] = useState("")
  
  const [password, setPassword] = useState("")


  const {isLoading} = useSelector((state)=>state.adminlogin)



  
 

  const dispatch = useDispatch()
  const handelSubmit = (e) => {
    e.preventDefault()

    const data = {
      email,
      password
    }
   if( dispatch(getAccessToken(data))){
    
   }
    
  }
  return (
    <>
    {
      isLoading ? "Loading..." :  <form onSubmit={handelSubmit} method="post">
      <input type="text" placeholder="email" value={email}  onChange={(e)=>setEmail(e.target.value)}/>
      <input type="password" placeholder="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
      <button >Login</button> 
    </form>
    }
 
    </>
    

  )
}

export default AdminLogin