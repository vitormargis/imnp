import React from "react";
// import PropTypes from "prop-types";

import { Container, Row, Col } from "../../reusecore/Layout";
import SectionTitle from "../../reusecore/SectionTitle";
import Button from "../../reusecore/Button";
import VintageBox from "../../reusecore/VintageBox";

import imgAbout from "../../assets/images/hosting/como.png";
import particle1 from "../../assets/images/app/particle/05.png";
import particle2 from "../../assets/images/app/particle/06.png";

import AboutSectionWrapper from "./about.style";

const About = () => {
  return (
    <AboutSectionWrapper id="como-atuamos">
      <img className="section__particle one" src={particle1} alt="img" />
      <img className="section__particle two" src={particle2} alt="img" />
      <Container fullWidthSM>
        <Row Vcenter={true}>
          <Col xs={12} sm={6}>
            <img
              className="about-thumb"
              src={imgAbout}
              alt="This is about UNI-Prime"
            />
          </Col>
          <Col xs={12} sm={6} className="about-content-wrap">
            <SectionTitle
              className="section-title"
              leftAlign={true}
              UniWidth="100%"
            >
              <h4> Como Atuamos </h4>
              <h2>
                <span>Amar, proteger e cuidar</span>
              </h2>
            </SectionTitle>
            <p className="about-text text-one">
              O Instituto Miriam Pinheiro (IMNP) tem como objetivos principais o
              apoio a pessoas em risco de segurança alimentar, e contribuir para
              a formação e capacitação de pessoas em situação de
              vulnerabilidade. Para atingir esses objetivos, o IMNP depende de
              contribuições dos associados e doações do público em geral. O
              instituto também poderá firmar parcerias e termos de cooperação
              com órgãos ou entidades públicas e privadas, com empresas e
              pessoas, visando sempre o cumprimento dos seus objetivos.
            </p>
            <p className="about-text text-two">
              Para que o Instituto Miriam Pinheiro possa crescer e apoiar muitas
              pessoas carentes, ele depende do apoio dos amigos e da comunidade.
            </p>
            {/* <VintageBox right={true} vintageTwo={true} position="relative">
              <Button>Learn More</Button>
            </VintageBox> */}
          </Col>
        </Row>
      </Container>
    </AboutSectionWrapper>
  );
};

export default About;
