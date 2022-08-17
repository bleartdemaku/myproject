import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import userIcon from "../../assets/user.png";
import loginIcon from "../../assets/login.svg";
import "./Login.scss";

function Login() {
  return (
    <>
      <Container className="mt-5">
        <Row>
          <Col lg={4} md={6} sm={12} className="text-center p-3 mt-5">
            <img className="icon" src={userIcon} alt="loading..." />
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                {/* <Form.Label>Email address</Form.Label> */}
                <Form.Control type="email" placeholder="Enter email" />
                {/* <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text> */}
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                {/* <Form.Label>Password</Form.Label> */}
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>

              <Button className="primary btn-block" type="submit">
                Login
              </Button>

              <div className="text-left mt-3">
                <p>Dont have an account yet!<a href="register"><small className="register">Register</small></a></p>
              </div>

            </Form>
          </Col>

          <Col lg={8} md={6} sm={12}>
            <img className="w-100" src={loginIcon} alt="loading..." />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Login;
