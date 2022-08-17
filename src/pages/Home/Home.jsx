import React from "react";
import CardBootstrap from "../../components/Card/CardBootstrap";
import CarouselBootstrap from "../../components/Carousel/CarouselBootstrap";
import Container from "react-bootstrap/Container";
import cardContent from "../../content/cardContent";

function Home() {
  return (
    <div>
      <CarouselBootstrap />
      <Container className="row">
        {cardContent.map((item, index) => (
          <CardBootstrap key={index} item={item} />
        ))}
      </Container>
    </div>
  );
}

export default Home;
