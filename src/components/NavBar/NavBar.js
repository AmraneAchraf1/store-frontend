import React from 'react'
import { Link } from 'react-router-dom'
import {RiShoppingCart2Line} from "react-icons/ri"
import { Container, Nav, Navbar, Spinner } from 'react-bootstrap'
import { useSelector } from 'react-redux'

const NavBar = () => {

  const {cartItems, isLoading} = useSelector(state=>state.cart)

 
  return (
    <Navbar bg="light shadow" expand="lg">
    <Container >
      <Navbar.Brand >
        <Link to={"/"} style={{color:"black", fontWeight:"bold", textTransform:"capitalize"}} > Store</Link>
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
         
        </Nav>
        <Link to={"cart"} className="btn btn-outline-dark "> Cart {
          isLoading ? (<Spinner variant="dark" animation="border" role="status">
          <RiShoppingCart2Line/>
              </Spinner>): (<span className=" mx-1"><RiShoppingCart2Line/>
        {JSON.parse(localStorage.getItem("cartItems")) ? JSON.parse(localStorage.getItem("cartItems")).length :cartItems.length  }
         </span>)
        }  </Link>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default NavBar