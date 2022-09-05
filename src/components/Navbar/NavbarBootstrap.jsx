import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import logo from "../../assets/bugatti-logo.png";
import "./NavbarBootstrap.scss";

function NavbarBootstrap() {
  return (
    <>
      <Navbar bg="dark" expand="lg" style={{zIndex:1}}>
        <Container fluid>
          <Navbar.Brand href="/home">
            <img
              src={logo}
              width="95"
              height="95"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>

          <Navbar.Brand className="text-white" href="/home">
            Bleart
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              {/* <Nav.Link className="text-white" href="/home">
                Home
              </Nav.Link> */}
              <Nav.Link className="text-white" href="/team">
                Team
              </Nav.Link>
              <Nav.Link className="text-white" href="/services">
                Services
              </Nav.Link>
              <Nav.Link className="text-white disabled-link" href="/contact">
                Contact
              </Nav.Link>
              <Nav.Link className="text-white disabled-link" href="/about">
                About
              </Nav.Link>
              {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link> */}
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarBootstrap;
