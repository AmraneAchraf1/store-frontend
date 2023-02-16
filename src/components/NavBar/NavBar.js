import React from 'react'
import { Link } from 'react-router-dom'
import {FiShoppingCart} from "react-icons/fi"
import { Container, Nav, Navbar, Spinner } from 'react-bootstrap'
import { useSelector } from 'react-redux'

import styles from "./navbar.module.css"
const NavBar = () => {

  const {cartItems, isLoading} = useSelector(state=>state.cart)

 
  return (
    <Navbar bg="shadow " fixed='top'  className={styles.nav} >
    <Container >
      <Navbar.Brand >
        <Link to={"/"} style={{color:"#62B250", fontWeight:"bold"}}  > DAHADDA </Link>
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
         
        </Nav>
        <Link to={"cart"} className={styles.link} >  {
          isLoading ? 
          (<Spinner  animation="border" role="status" className="mx-5 d-flex align-items-center justify-items-center" >
          <FiShoppingCart style={{fontSize:"12"}}/> 
              </Spinner>):
               (<span className=" mx-1 d-flex align-items-center">
                <FiShoppingCart /> 
                
                {" "}{JSON.parse(localStorage.getItem("cartItems")) ? 
                JSON.parse(localStorage.getItem("cartItems")).length :
                cartItems.length  }
                

              </span>)
        }  </Link>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default NavBar