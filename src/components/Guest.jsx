import "./Guest.css";
import { Button, Row, Col,Container } from "react-bootstrap";
import { FaConciergeBell } from "react-icons/fa";
import Image from "../images/SCL.jpg";

const Guest = () => {
  return (
    <div className="parentguest">
      <Container>
        <Row>
          <Col md={7}>
<div className='guest-image'></div>
       </Col>
          <Col md={5}>
            <div className="guest-titles ">
              <h3 className="guest-t1">Guest</h3>
              <h4 className="guest-t2">Rooms</h4>
              <p>
                The Monterey Stage Coach Lodge offers premium accommodation
                options in Monterey. Our well-appointed Monterey Hotel Rooms
                will help you enjoy a luxurious stay in Monterey. Whether you
                are a business traveler or you are on a vacation, we assure you
                that you will find our Monterey hotel rooms to be a choice you
                won’t regret for your accommodation needs.
              </p>

              <p>
                We have a variety of amenities to provide you with the most
                comfortable stay in Monterey. At the same time, at the Monterey
                Stage Coach Lodge, we are also very much aware of the fact that
                great hotel accommodations are not just a matter of cozy rooms
                and a1111 variety of amenities, which we have, but the overall
                experience lies in serving every guest with a smile. We have a
                very friendly and helpful staff that is ready to go the extra
                mile to ensure that you enjoy your time in Monterey with a
                memorable stay. You will love our hospitality and our friendly
                services.
              </p>
              <div className="text-center">
                <Button className="read-more"> READ MORE</Button>
                <span className="icons">
                  <FaConciergeBell size="2x" />
                </span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Guest;
