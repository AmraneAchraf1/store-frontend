import React from 'react'
import {  useNavigate } from 'react-router-dom'

const IsAuth = ({children}) => {

  const isAuthenticated = localStorage.getItem('accessToken')
  const navigate = useNavigate()
  if (!isAuthenticated) {

    return( <button onClick={()=>navigate("/admin/auth", {replace:true})} > Pleas Login </button>)
}

  return (
    <>
        {children}
    </>
  )
}

export default IsAuth