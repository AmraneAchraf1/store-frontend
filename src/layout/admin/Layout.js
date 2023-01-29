import React from 'react'
import { Container } from 'react-bootstrap'
import { Outlet } from 'react-router-dom'
import AppBar from '../../components/AppBar/AppBar'
import SideBar from '../../components/SideBar/SideBar'

const Layout = () => {
  return (
    <div className='d-flex h-100 w-100'>
        <SideBar />
        <div className='w-100' style={{overflow:"auto"}}>
          <AppBar/>
          <Outlet/>
        </div>
    </div>
  )
}

export default Layout