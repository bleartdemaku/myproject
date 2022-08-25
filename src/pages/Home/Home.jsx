import React from "react";
import CardBootstrap from "../../components/Card/CardBootstrap";
import CarouselBootstrap from "../../components/Carousel/CarouselBootstrap";
import Container from "react-bootstrap/Container";
import cardContent from "../../content/cardContent";
import accordionContent from '../../content/accordionContent';
import NavbarBootstrap from "../../components/Navbar/NavbarBootstrap";
import AccordionBootstrap from "../../components/Accordion/AccordionBootstrap";
import "./Home.scss";
import Footer from '../../components/Footer/Footer'

function Home() {
  return (
    <>
      <NavbarBootstrap />
      <CarouselBootstrap className="carousel" />
      <Container>
        <h1 className="text">This is what our Company is trying to achive!</h1>
        <Container className="row d-flex justify-content-between">
          {accordionContent.map((item, index) => (
            <AccordionBootstrap key={index} item={item} />
          ))}
        </Container>
      </Container>
      <Container className="wrapper" >
        <Container className="row d-flex justify-content-between">
          {cardContent.map((item, index) => (
            <CardBootstrap key={index} item={item} />
          ))}
        </Container>
      </Container>
      <Footer />
    </>
  );
}

export default Home;
