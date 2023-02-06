import React from 'react'
import { Button } from 'react-bootstrap';
import { useNavigate, useRouteError } from 'react-router-dom'

const ErrorPage = () => {
  const error = useRouteError()

const navigate = useNavigate()
  return (
    <>
        <h1>{error.data}</h1>
        <Button onClick={()=>navigate("/admin/auth/login" ,{replace:true})}>Pleas Login</Button>
    </>

  )
}

export default ErrorPage