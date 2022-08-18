import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./CardBootstrap.scss";

function CardBootstrap({ item: { id, title, body, image } }) {
  return (
    <Card className="card mb-3" style={{ width: "18rem", height: "550px" }}>
      <Card.Img variant="top" src={`./images/${image}`} alt="loading..." />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{body}</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default CardBootstrap;
