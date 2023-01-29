import React from 'react'
import { useRouteError } from 'react-router-dom'

const ErrorPage = () => {
  const error = useRouteError()
  console.log(error.message);
  return (
    <div>ErrorPage</div>
  )
}

export default ErrorPage