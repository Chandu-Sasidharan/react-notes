import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import backImg from "../../Images/image2.jpg";

function Cards() {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={backImg} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default Cards;
