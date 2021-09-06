import "./Attraction.css";
import React from "react";

import attract1 from "../images/attract1.jpg";
import attract2 from "../images/attract2.jpg";
import attract3 from "../images/attract3.jpg";
import { Container, Button, Row, Col } from "react-bootstrap";
import { FaConciergeBell } from "react-icons/fa";
function Attraction() {
  return (
    <div class="parentattract">
      <Container>
        <div className="attract-title">
          <p className="t1">STAGE COACH LODGE IN MONTEREY</p>
          <h1>ATTRACTIONS</h1>
          <div>
            <p className="t2">Monterey, California</p>
          </div>
          <p className="disc1">
            Monterey Peninsula offers the vacation experience of a lifetime. The
            Monterey Peninsula has a beauty that entices visitors from all over
            the world. Monterey is located along the central coast of California
            about 120 miles south of San Francisco. The Monterey Peninsula is
            one of the most scenic areas of the world offering great ocean
            vistas and the famed 17 Mile Drive, a coastal toll road that offers
            breathtaking views of the bountiful Pacific Ocean and the rolling
            green hills of the world famous Pebble Beach and Spyglass Golf
            Courses.
          </p>
          <p className="disc2">
            Monterey is also home of the world's largest sea life exhibit, the
            Monterey Bay Aquarium. Pacific Grove, host to one of the oldest
            working lighthouses on the west coast, comes alive when the monarch
            butterfly populations migrate through this tiny coastal town. Carmel
            offers a picturesque white sand beach and old world charm with its
            quaint shops. Spectacular beaches, nine world champion golf courses,
            historic old adobes, Fisherman's Wharf, infamous Cannery Row,
            fabulous shopping, and gourmet restaurants all await you.
          </p>
        </div>
        <Row className="container-image">
          <Col className="attraction-images"  lg={4}>
            <div className="content">
                <img className="content-image" src={attract1} alt="image1" />
                <div className="content-overlay"></div>
                <div className="content-details fadeIn-right">
                  <h3 className="content-title">PLAY</h3>
                  <p className="content-text">
                    GUESTS OF OUR HOTEL CAN GOLF AT BEAUTIFUL AND CHALLENGING
                    COURSES  IN MONTEREY
                  </p>
                </div>
              </div>
            
          </Col>
          <Col className="attraction-images"lg={4} >
            <div className="content">
            <img src={attract2} alt="image3" />
              <div className="content-overlay"></div>
              <div className="content-image">
                
              </div>
              <div className="content-details fadeIn-right">
                <h3 className="content-title">EXPLORE</h3>
                <p class="content-text">
                  DISCOVER BREATHTAKING MONTEREY SCENERY AND HISTORIC LANDMARKS
                  AS A GUEST OF OUR BOUTIQUE HOTEL
                </p>
              </div>
            </div>
          </Col>
          <Col className="attraction-images"  lg={4}>
            <div className="content">
              <img src={attract3} alt="image3" />

              <div className="content-overlay"></div>
              
                
              
              <div className="content-details fadeIn-right">
                <h3 className="content-title">DISCOVER</h3>
                <p class="content-text">
                DISCOVER BREATHTAKING MONTEREY SCENERY AND HISTORIC LANDMARKS AS A GUEST OF OUR BOUTIQUE HOTEL
                </p>
              </div>
            </div>
          </Col>
          
        </Row>

        
      </Container>
      <div className="button">
          <Button className="read-more">VIEW MORE</Button>
          <span className="icons">
            <FaConciergeBell size="2x" />
          </span>
        </div>
    </div>
  );
}

export default Attraction;
