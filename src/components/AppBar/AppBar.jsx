import { useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link} from 'react-router-dom';
import { authAdmin } from '../../store/Reducer/Admin/AdminSlice';
import { revokeToken } from '../../store/Reducer/Admin/auth/LogoutSlice';

function AppBar() {

  
  const dispatch = useDispatch()

  const {admin} = useSelector((state) => state.admin)
  const navigate = useNavigate()

  
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
    <Navbar bg="light shadow" expand="lg">
      <Container fluid>
        <Navbar.Brand >
          <Link to={"/admin"} style={{color:"black", fontWeight:"bold", textTransform:"capitalize"}} > {admin.first_name} {admin.last_name} </Link>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
           
          </Nav>
          <Form onSubmit={handelSubmit}>
                <Button type="submit" >LogOut</Button>
            </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppBar;