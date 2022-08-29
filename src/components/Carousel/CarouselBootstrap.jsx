import Carousel from 'react-bootstrap/Carousel';
import servicesContent from '../../content/servicesContent';

function CarouselBootstrap() {
  return (
    <Carousel variant="white">
        {servicesContent.map((item, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100 h-100"
              src={'images/'+item.image}
              alt="...loading"
              // height="600"
            />
            <Carousel.Caption className="text-white">
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
        </Carousel>
  );
}

export default CarouselBootstrap;