import React from 'react'
import { Outlet } from 'react-router-dom'
import styles from "./users.module.css"
import NavBar from '../components/NavBar/NavBar'


const Index = () => {
  return (
    <div className={styles.body}>
    <div className={styles.circle_1}></div>
    <NavBar/>
    <Outlet/>
    </div>
  )
}

export default Index