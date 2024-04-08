import Carousel from "react-bootstrap/Carousel";
import backImg1 from "../../Images/image1.jpeg";
import backImg2 from "../../Images/image2.jpg";
import backImg3 from "../../Images/image3.jpg";

function Slider() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img className="d-block w-80 h-200" src={backImg1} />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img className="d-block w-80 h-200" src={backImg2} />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-80 h-200" src={backImg3} />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;
