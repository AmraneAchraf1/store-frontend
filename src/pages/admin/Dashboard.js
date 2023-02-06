import React, { useEffect, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { authAdmin } from "../../store/Reducer/Admin/AdminSlice";

const Dashboard = () => {
  //states for the dashboard component
  const [email, setEmail] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authAdmin())
      .unwrap()
      .then((data) => {
        setEmail(data.email);
        setFname(data.first_name);
        setLname(data.last_name);
      })
      .catch((err) => {
        const isAuthenticated = localStorage.getItem("accessToken");
        if (isAuthenticated === undefined || isAuthenticated === null || isAuthenticated.length===0 ) {
      
           console.log("please login first");
          
          }
         
      });
  }, [dispatch]);

  const { admin } = useSelector((state) => state.admin);

  const [password, setPassword] = useState("");
  const [newpassword, setNewPassword] = useState("");

  const handelSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <Container fluid>
      <h1>Profile</h1>
      <p>
        Welcome <span className="">{admin.first_name}</span>
      </p>
      <Container>
        <Form onSubmit={handelSubmit} method="post" className="">
          <Form.Group className="mb-3 " controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3 " controlId="fname">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter first name"
              value={fname}
              onChange={(e) => setFname(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="lname">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter last name"
              value={lname}
              onChange={(e) => setLname(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword1">
            <Form.Label>Old Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter Your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword3">
            <Form.Label>New Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={newpassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </Form.Group>

          <Button variant="primary" type="submit" className="w-100">
            Update
          </Button>
        </Form>
      </Container>
    </Container>
  );
};

export default Dashboard;