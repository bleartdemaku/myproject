import React, { useEffect, useState } from "react";
import NavbarBootstrap from "../../components/Navbar/NavbarBootstrap";
import Footer from "../../components/Footer/Footer";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/esm/Container";

function Services() {
  const [posts, setPosts] = useState("");

  const getApiData = async () => {
    const response = await fetch("http://localhost:8000/bugatti").then(
      (response) => response.json()
    );

    setPosts(response);
  };

  useEffect(() => {
    getApiData();
  }, []);

  return (
    <>
      <NavbarBootstrap />
      <Container className="mt-3">
        {posts &&
          posts.map((post) => (
            <Card className="text-center mt-3">
              <Card.Header>{post.id}</Card.Header>
              <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Text>{post.body}</Card.Text>
              </Card.Body>
              <Card.Footer className="text-muted">2 days ago</Card.Footer>
            </Card>
          ))}
      </Container>
      <Footer />
    </>
  );
}

export default Services;
