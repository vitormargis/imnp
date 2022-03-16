import React from "react";

import {
  FaFacebookF,
  FaTwitter,
  FaEnvelope,
  FaPinterestP,
  FaInstagram,
} from "react-icons/fa";

import { Container, Row, Col } from "reusecore/Layout";
import Button from "reusecore/Button";
import Particle from "reusecore/Particle";

import logo from "assets/images/app/footer/footer-logo-two.png";

import FooterBGTwo from "assets/images/app/footer/footer-particle-two.png";

import FotterWrapper from "./footer.style";

const FooterClassic = () => {
  return (
    <FotterWrapper>
      <img src={FooterBGTwo} alt="img" className="section__particle one" />
      <Particle />
      <Container>
        <Row>
          <Col xs={12} sm={6} lg={3}>
            <div className="footer-widgets first">
              <span href="#">
                <a className="footer-logo">
                  <img src={logo} alt="logo" />
                </a>
              </span>
              <form className="subscribe-form">
                <input type="text" placeholder="Search here..." />
                <Button>
                  <FaEnvelope />
                </Button>
              </form>
            </div>
          </Col>
          <Col xs={12} sm={6} lg={2}>
            <div className="footer-widgets">
              <h3 className="widget-title">Download</h3>
              <ul className="widget-catagory">
                <li>
                  <span href="#">
                    <a> Company </a>
                  </span>
                </li>
                <li>
                  <span href="#">
                    <a> Android App </a>
                  </span>
                </li>
                <li>
                  <span href="#">
                    <a> ios App </a>
                  </span>
                </li>
                <li>
                  <span href="#">
                    <a> Desktop </a>
                  </span>
                </li>
              </ul>
            </div>
          </Col>
          <Col xs={12} sm={6} lg={3}>
            <div className="footer-widgets">
              <h3 className="widget-title">Help</h3>
              <ul className="widget-catagory">
                <li>
                  <span href="#">
                    <a> FAQ </a>
                  </span>
                </li>
                <li>
                  <span href="#">
                    <a> Privecy </a>
                  </span>
                </li>
                <li>
                  <span href="#">
                    <a> Reporting </a>
                  </span>
                </li>
                <li>
                  <span href="#">
                    <a> Terms & Condition </a>
                  </span>
                </li>
              </ul>
            </div>
          </Col>
          <Col xs={12} sm={6} lg={4}>
            <div className="footer-widgets">
              <h3 className="widget-title">Follow US</h3>
              <ul className="social">
                <li>
                  <span href="#">
                    <a>
                      <FaFacebookF />
                    </a>
                  </span>
                </li>
                <li>
                  <span href="#">
                    <a>
                      <FaTwitter />
                    </a>
                  </span>
                </li>
                <li>
                  <span href="#">
                    <a>
                      <FaInstagram />
                    </a>
                  </span>
                </li>
                <li>
                  <span href="#">
                    <a>
                      <FaPinterestP />
                    </a>
                  </span>
                </li>
              </ul>
              <p className="copyright-text">
                Copyright &#169; 2021 Design By
                <span href="#">
                  <a> Devscorn </a>
                </span>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </FotterWrapper>
  );
};

export default FooterClassic;
