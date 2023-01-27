import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getAccessToken } from '../../../store/Reducer/Admin/auth/LoginSlice'

const AdminLogin = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  

  const dispatch = useDispatch()
  const handelSubmit = (e) => {
    e.preventDefault()

    const data = {
      email,
      password
    }
    dispatch(getAccessToken(data))
    
  }
  return (
    <form onSubmit={handelSubmit} method="post">
      <input type="text" placeholder="email" value={email}  onChange={(e)=>setEmail(e.target.value)}/>
      <input type="password" placeholder="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
      <button>Login</button>
    </form>

  )
}

export default AdminLogin