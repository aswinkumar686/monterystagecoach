import React from "react";
import { Button, Row, Col } from "react-bootstrap";

import logo1 from "../images/logo-new.png";
import logo2 from "../images/logo2.jpg";
import "./Footer.css";
import { IoMdArrowDropdown } from "react-icons/io";

function Footer() {
  return (
    <div className="footer">
      <Row className="footer-container">
        <Col lg={3}>
          <div className="logo1">
            <img src={logo1} alt="logo1" />
            <h4>
              by BLINK HOTELS <sup>TM</sup>
            </h4>
          </div>
          <div className="logo2">
            <img src={logo2} size="md" alt="logo2 " />
          </div>
        </Col>
        <Col lg={9} className=" footer-buttons">
          <Row className="buttons-div">
            <Col lg={4}>
              <Button className="read-more">
                Languages
                <IoMdArrowDropdown />
              </Button>
            </Col>
            <Col lg={4}>
              <Button className="read-more">Modify/Cancel</Button>
            </Col>
            <Col>
              <Button lg={4} className="read-more access">
                Accessiblity
              </Button>
            </Col>
          </Row>
          <Col className="info">
            <Row>
            <Col className="about">
              <ul>
                <li>About Us</li>
                <li>Reviews</li>
                <li>Directions</li>
                <li>News</li>
                <li>Cleaning Protocols</li>
              </ul>
            </Col>
            <Col className="jobs">
              <ul>
                <li>Jobs</li>
                <li>Blogs </li>
                <li>Lost & Found</li>
                <li>FAQs</li>
                <li>Personal Data Request</li>
              </ul>
            </Col>
            <Col className="sitemap">
              <ul>
                <li>Sitemap</li>
                <li>Cookie Policy</li>
                <li>Privacy Policy</li>
                <li>Terms & Conditions</li>
              </ul>
            </Col>
          </Row>
          </Col>

          <Row>
            <Col lg={12} className="break-line">
            <div className="line" />
          </Col>
          </Row>
            <p className="company-description">
              Website Design, Development, and Digital Marketing Powered by
              INNsight. Copyright © 2021 INNsight.com, Inc.
            </p>
          
        </Col>
        <div className="footer"></div>
      </Row>
      <div className="end">
        <div>Monterey, CA Hotels |</div>
        <div>Attractions in Monterey, CA |</div>
        <div>Monterey, CA Reservations </div>
        <div>| Monterey, CA Hotel Rooms</div>
      </div>
    </div>
  );
}

export default Footer;
