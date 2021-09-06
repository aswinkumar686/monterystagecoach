import React from "react";
import { Button, Row, Col, Container } from "react-bootstrap";
import map from "../images/map.jpeg";
import { FaConciergeBell } from "react-icons/fa";

import "./Location.css";

const Location = () => {
  return (
    <div className="location-container">
        <Container>
      <Row>
        <Col>
          
           
            <h1>LOCATION</h1>
         
          <div className="Location">
            <div className="description">
              <h3>ADDRESS:</h3>
              <p>1111 Tenth Street Monterey, California 93940 USA</p>
              <br />
              <h3>PHONE:</h3>
              <p>(831) 373-3632</p>
              <h3>EMAIL:</h3>
              <p>stagecoachlodge@innsight.com</p>
              <br />
              <div className="text-center button-div  ">
          <Button className="read-more"> GET DIRECTIONS</Button>
            <span className="icons">
              <FaConciergeBell size="lg"/>
            </span>
          </div>
            </div>
            <div className="map-image">
              <img src={map} alt="map" />
            </div>
          </div>
        </Col>
      </Row>
      </Container>
    </div>
  );
};
export default Location;
