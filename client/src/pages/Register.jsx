import React from "react";
import NavBar from "../components/navbar/NavBar";
import Footer from "../components/footer/Footer";
import "../assets/styles/register.scss";
import { Form, Col, Button } from "react-bootstrap";

// TODO: Make factData.json to pull random environmental facts from 
// TODO: Replace [TEXT] with random data pulled from factData.json
// TODO: Make text animated and appear after the user selects the signup button
// TODO: Caputre form data and store to Database
// TODO: navigate to ./vehicle after form submit

const Register = () => {
  return (
    <>
      <NavBar />
      <div className="register-container p-5">
        <div className="row pt-5">
        <div className="col-md-4 p-5">
          <h1>Thank you for you contribution to a safer planet.</h1>
          <p>[Fact from factData.json here]</p>
        </div>
        <div className="col-md-8 form-container p-5">
          <Form>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridFirstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" placeholder="Enter First Name" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridLastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Last Name" />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
            </Form.Row>

            <Form.Group id="formGridCheckbox">
              <Form.Check
                type="checkbox"
                label="I accept the terms in the license agreement."
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Sign Up
            </Button>
          </Form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Register;