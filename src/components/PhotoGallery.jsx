import { Container, Button, Row, Col } from "react-bootstrap";
import { FaConciergeBell } from "react-icons/fa";
import "./PhotoGallery.css";
const PhotoGallery = () => {
  return (
    <div className="parent">
      <Container>
        <Row>
          <Col className="textarea" lg={5}>
            <div className="gallery-title">
            <h1 >
              PHOTO GALLERY FOR STAGE COACH LODGE
            </h1>
            </div>
            
            <p>
              We invite you to look through our photo gallery. Time is precious,
              and we have added designer features and modern amenities to our
              property to ensure that your time with us is comfortable and
              memorable. We look forward to hosting you on your next visit to
              Monterey, California.
            </p>
           

            
              <div className="text-center">
                <Button className="read-more"> READ MORE</Button>
                <span className="icons">
                  <FaConciergeBell size="4x" />
                </span>
              </div>
            
          </Col>
          <Col className="photo-1" lg={2}>
          </Col>
          <Col className="photo-2" >
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PhotoGallery;
