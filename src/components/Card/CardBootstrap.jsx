import Card from "react-bootstrap/Card";
import "./CardBootstrap.scss";

function CardBootstrap({ item: { id, title, body, image } }) {
  return (
    // <Card className="card mb-3" style={{ width: "18rem", height: "550px" }}>
    //   <Card.Img variant="top" src={`./images/${image}`} alt="loading..." />
    //   <Card.Body>
    //     <Card.Title>{title}</Card.Title>
    //     <Card.Text>{body}</Card.Text>
    //     <Button variant="primary">Go somewhere</Button>
    //   </Card.Body>
    // </Card>
    <Card className="bg-dark text-white mb-3">
      <Card.Img src={`./images/${image}`} alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title>{title}</Card.Title>
        {/* <Card.Text>
          {body}
        </Card.Text> */}
        <Card.Text>Last updated 3 mins ago</Card.Text>
      </Card.ImgOverlay>
    </Card>
  );
}

export default CardBootstrap;
