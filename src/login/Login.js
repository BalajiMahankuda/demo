import React from "react";
import { Form, Button } from "react-bootstrap";

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
      <Button variant="link">New to us ! Register</Button>
    </Form>
  </div>
);

export default Login;
