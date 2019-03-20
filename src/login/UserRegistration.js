import React from "react";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";

const UserRegistrationPage = () => (
  <div className="jumbotron">
    <h5 style={{ textAlign: "center" }}>Registration</h5>
    <Form>
      <Form.Group controlId="Name">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Name" />
      </Form.Group>
      <Form.Group controlId="formEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group controlId="formContactNo">
        <Form.Label>Mobile number</Form.Label>
        <Form.Control type="number" placeholder="Mobile number" />
      </Form.Group>
      <Form.Group controlId="formAddress">
        <Form.Label>Address</Form.Label>
        <Form.Control as="textarea" rows="3" placeholder="Address" />
      </Form.Group>

      <Form.Group controlId="formPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group controlId="formConfrimPassword">
        <Form.Label>Confrim Password</Form.Label>
        <Form.Control type="text" placeholder="Confirm Password" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  </div>
);

export default UserRegistrationPage;
