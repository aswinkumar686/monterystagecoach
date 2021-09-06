import React from "react";
import "./SisterProperties.css";
import ysh from "../images/ysh.png";
import ywl from "../images/ywl.png";
import bml from "../images/bml.png";
import { Container, Button, Row, Col } from "react-bootstrap";
import envelop from "../images/envelop.png";
import { ImFacebook } from "react-icons/im";
import { AiOutlineTwitter, AiFillYoutube } from "react-icons/ai";
import { FaYelp, FaTripadvisor, FaInstagram, FaSkype } from "react-icons/fa";

function SisterProperties() {
  return (
    <div className="parentsister">
      <Container>
        <Row>
          <div className="title1">
            <h1>SISTER PROPERTIES</h1>
          </div>
          <div className="desc">
            <h4>
              When travelling to top tourist destinations in California, we've
              got covered!
            </h4>
            <p>
              If you are planning on visiting Yosemite National Park, California
              stay at either of our hotels at the Westgate or Southgate
            </p>
          </div>
          <div className="title2">
            <h4>BOOK DIRECTLY WITH US AND SAVE!</h4>
          </div>
          <Row className="sisterprop-list">
            <Col className="sisterprop" lg={4}>
              <a href="https://www.yosemitesouthgate.com/">
                <img src={ysh} alt="ysh" />
                <h3>YOSEMITE SOUTHGATE HOTEL</h3>
              </a>
            </Col>
            <Col className="sisterprop" lg={4}>
              <a href="https://www.buckmeadowslodge.com/">
                <img src={bml} alt="ysh" />
                <h3>BUCK MEADOWS LODGE</h3>
              </a>
            </Col>
            <Col className="sisterprop " lg={4}>
              <a href="https://www.yosemitewestgate.com/">
                <img src={ywl} alt="ysh" />
                <h3>YOSEMITE WESTGATE LODGE</h3>
              </a>
            </Col>
          </Row>
          <Row className="session">
            <Col className=" subscribe-session"  lg={5} md={12}>
              <Col className="subscribe">
                <Row className="subscribe-title">
                  <Col className="envelop">
                    <img src={envelop} alt="envelop" />
                  </Col>
                  <Col className="sub-title ">
                    <label>SUBSCRIBE</label>
                    <h3>SIGN UP FOR OUR MAILING LIST</h3>
                  </Col>
                </Row>
                <div className="input-mail">
                  <form className="subscribe-form">
                    <div className="subscribe-input">
                      <input type="email" placeholder="Enter Email Address" />
                    </div>
                    <div className="buttons">
                      <input type="button" value="Sign Up" />
                    </div>
                  </form>
                </div>
              </Col>
            </Col>
            <Col className=" contact-session " lg={6} md={12}>
              <div className="contact">
                <div className="contact-title-div">
                  <div className="contact-title ">
                    <label>CONNECT</label>
                    <h3>WITH US</h3>
                  </div>
                </div>
                <Row className="logos">
                <Col className="logo" lg={2} md={1}>
                    <ImFacebook size="2x" />
                  </Col>
                  <Col className="logo" lg={2} md={1}>
                    <AiOutlineTwitter lg={2} size="2x" />
                  </Col>

                  <Col className="logo" lg={2} md={1}>
                    <AiFillYoutube size="2x" />
                  </Col>
                  <Col className="logo" lg={2} md={1}>
                    <FaYelp size="2x" />
                  </Col>
                  <Col className="logo" lg={2} md={1}>
                    <FaTripadvisor size="2x" />
                  </Col>

                  <Col className="logo" lg={2} md={1}>
                    <FaInstagram size="2x" />
                  </Col>
                  <Col className="logo" lg={2} md={1}>
                    <FaSkype size="2x" />
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Row>
      </Container>
    </div>
  );
}

export default SisterProperties;
