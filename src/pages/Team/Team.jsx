import React from "react";
import NavbarBootstrap from "../../components/Navbar/NavbarBootstrap";
import Footer from "../../components/Footer/Footer";
// import teamContent from "../../content/teamContent";
// import TeamCard from "../../components/TeamCard/TeamCard";
import "./Team.scss";
import videoBg from "../../assets/videoBg.mp4";
import { useState } from "react";
import { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

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
      <div className="main">
        <video src={videoBg} autoPlay loop muted id="video" />
        {/* <div className="content">
          {teamContent.map((item, index) => (
            <TeamCard key={index} item={item} />
          ))}
        </div> */}
        <div className="flex flex-row">
          {employees &&
            employees.map((employee) => (
              <Card style={{ width: "18rem" }} className="mt-5 mx-auto">
                <Card.Img variant="top" src={employee.image} alt="" />
                <Card.Body>
                  <Card.Title>{employee.name}</Card.Title>
                  <Card.Text>{employee.job}</Card.Text>
                  <Card.Text>{employee.about}</Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Team;
