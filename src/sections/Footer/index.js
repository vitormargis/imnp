import React from "react";

import { Container, Row, Col } from "../../reusecore/Layout";

import { FiMail } from "react-icons/fi";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

import logo from "../../assets/images/app/footer/footer-logo.png";
import particleOne from "../../assets/images/app/footer/footer-particle.png";

import FotterWrapper from "./footer.style";

const Footer = () => {
  return (
    <FotterWrapper id="contato">
      <img
        className="section__particle one"
        alt="img"
        src={particleOne}
        alt="appion app landing"
      />
      <Container>
        <Row>
          <Col xs={12} sm={6} lg={3}>
            <div className="footer-widgets first">
              <span href="#">
                <a className="footer-logo">
                  {/* <img src={logo} alt="logo" /> */}
                </a>
              </span>
              <ul className="info">
                <li>
                  <FiMail />
                  <a href="mailto:contact@appion.com">
                    contato@institutomiriampinheiro.org.br
                  </a>
                </li>
                {/* <li>
                  <FiPhoneCall />
                    <a href="tel:1-562-867-5309">+1-562-867-5309"</a>
                </li> */}
              </ul>

              <ul className="social">
                <li>
                  <span>
                    <a
                      target="_blank"
                      href="https://www.facebook.com/Instituto-Miriam-Pinheiro-105630138727326"
                    >
                      <FaFacebookF />
                    </a>
                  </span>
                </li>
                <li>
                  <span>
                    <a
                      target="_blank"
                      href="https://www.instagram.com/institutomiriampinheiro/"
                    >
                      <FaInstagram />
                    </a>
                  </span>
                </li>
              </ul>
            </div>
          </Col>
          <Col xs={12} sm={6} lg={3}></Col>
          <Col xs={12} sm={6} lg={3}></Col>
          <Col xs={12} sm={6} lg={3}>
            {/* <div className="footer-widgets">
              <h3 className="widget-title">Our Address</h3>
              <p>
                1370 Roosevelt Street, <br />
                Little York City, New Jersey <br />
                08834
              </p>
            </div> */}
          </Col>
        </Row>
        <div className="footer-bottom">
          <ul className="footer-menu">
            {/* <li>
              <Link href="#">
                <a>Terms</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>Condition</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>Contact</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>Help</a>
              </Link>
            </li> */}
          </ul>
          <p className="copyright-text">
            Copyright @
            <span href="#">
              <a>IMNP </a>
            </span>
            | All Right Reserved 2022
          </p>
        </div>
      </Container>
    </FotterWrapper>
  );
};

export default Footer;
