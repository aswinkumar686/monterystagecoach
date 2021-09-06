import { Container, Button,Row, Col } from "react-bootstrap";
import { FaConciergeBell } from "react-icons/fa";
import "./welcome.css";
const Welcome = () => {
  return (
    <div className="welcome">
      <Container className="p-3">
        <Row>
          <Col>
          <Col>
          <div className="title">
          <h1 className="text-center" style={{ fontSize: "30px" }}>Welcome To</h1>
          <div className="text-center" style={{ fontSize: "50px" }}>
            Stage Coach Lodge
          </div>
        </div>
          </Col>
          <Col>
          <div className="animetext">
          <h2>
            Stage Coach Lodge in Monterey
          </h2>
          <p>
            the Stage Coach Lodge is a boutique lodge located right off of
            Highway 1 in Downtown Monterey.
          </p>
          <p>
            It is our pleasure to welcome you and your family to the beautiful
            Monterey Peninsula. The Stage Coach Lodge offers easy access to the
            various tourist attractions located in and around the Peninsula with
            newly remodeled air-conditioned hotel rooms. Simply make a right
            turn onto Tenth Street when exiting the Downtown Monterey exit off
            of Highway 1 and you’ll find our hotel nestled in a quiet
            residential neighborhood within a short stroll to Lake El Estero,
            Dennis the Menace Park, a variety of shops and restaurants, and of
            course, the beach. Our Monterey hotel is also within walking
            distance to the Naval Postgraduate School and Hyatt Regency
            Conference Center. You can drive to downtown, Fisherman’s Wharf,
            Cannery Row and the Monterey Bay Aquarium or hop back onto HWY 1 to
            get to Laguna Seca Raceway, the Monterey Fairgrounds, Carmel and the
            17 Mile Drive, which are all within minutes of our property.
          </p>
        </div></Col>
          <Col>
          <div className="text-center button-div  ">
          <Button className="read-more"> READ MORE</Button>
            <span className="icons">
              <FaConciergeBell size="lg"/>
            </span>
          </div></Col>
          </Col>

        </Row>
        
        
        
      </Container>
    </div>
  );
};

export default Welcome;
