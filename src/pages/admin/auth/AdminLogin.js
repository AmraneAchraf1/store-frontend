import React, { useState } from "react";
import { Button, Container, Form, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { getAccessToken } from "../../../store/Reducer/Admin/auth/LoginSlice";

const AdminLogin = (props) => {
  const [email, setEmail] = useState("");
  const [err, setError] = useState("");
  const [password, setPassword] = useState("");

  const { isLoading } = useSelector((state) => state.adminlogin);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handelSubmit = (e) => {
    e.preventDefault();

    const data = {
      email,
      password,
    };

    if (data.email.length && data.password.length) {
      dispatch(getAccessToken(data))
        .unwrap()
        .then((res) => {
          if (res.msg === "Invalid") {
            setError("Invalid email or password");
          } else {
            navigate("/admin/dashboard", {
              replace: true,
            });
          }
        })
        .catch((err) => {
          setError(err);
        });
    } else {
      setError("Please enter a valid email or password");
    }
  };

  return (
    <Container>
      <div
        className="d-flex  align-items-center justify-content-center"
        style={{ height: "100vh", width: "100%", flexDirection: "column" }}
      >
        <span
          className={`${
            err ? "alert" : ""
          } alert-dark w-75 text-center font-weight-bol`}
        >
          {isLoading ? (
            <Spinner variant="dark" animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          ) : (
            err
          )}
        </span>
        <Form onSubmit={handelSubmit} method="post" className="w-75">
          <Form.Group className="mb-3 " controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Button
            variant="primary"
            type="submit"
            className="w-100"
            disabled={isLoading ? true : false}
          >
            {isLoading ? (
              <Spinner variant="dark" animation="border" role="status">
                {" "}
              </Spinner>
            ) : (
              "Login"
            )}
          </Button>
        </Form>
      </div>
    </Container>
  );
};

export default AdminLogin;
