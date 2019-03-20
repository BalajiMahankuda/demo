import React from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Login = () => (
  <div style={{ margin: 40 }} className="jumbotron">
    <h3 style={{ textAlign: "center" }}>Login</h3>
    <Form>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Login
      </Button>
      &nbsp;&nbsp;&nbsp;
      <Link to="/UserRegistrationPage">New to us ! Register</Link>
    </Form>
  </div>
);

export default Login;
