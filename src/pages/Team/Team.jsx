import React from "react";
import NavbarBootstrap from "../../components/Navbar/NavbarBootstrap";
import Footer from "../../components/Footer/Footer";
import "./Team.scss";
import videoBg from "../../assets/videoBg.mp4";
import { useState } from "react";
import { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { Col, Row } from "react-bootstrap";

function Team() {
  const [employees, setEmployees] = useState("");

  const getApiData = async () => {
    const response = await fetch("http://localhost:8000/employees").then(
      (response) => response.json()
    );

    setEmployees(response);
  };

  useEffect(() => {
    getApiData();
  }, []);

  return (
    <>
      <NavbarBootstrap />

      <video src={videoBg} autoPlay loop muted id="video" />
      <div className="content">
        <h1>This is our team!!!</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <Row sm={1} md={3} className="g-0">
        {employees &&
          employees.map((employee) => (
            <Col className="card-columns">
              <Card style={{ width: "18rem" }} className="mt-5 mb-5 mx-auto">
                <Card.Img variant="top" src={employee.image} alt="" />
                <Card.Body>
                  <Card.Title>{employee.name}</Card.Title>
                  <Card.Text>{employee.job}</Card.Text>
                  <Card.Text>{employee.about}</Card.Text>
                  <Link to={`/team/${employee.id}`}>
                    <Button variant="primary">Go somewhere</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
      </Row>

      <Footer />
    </>
  );
}

export default Team;
