import React from "react";
import PropTypes from "prop-types";

import { Container, Row, Col } from "../../reusecore/Layout";
import SectionTitle from "../../reusecore/SectionTitle";
import Button from "../../reusecore/Button";
import VintageBox from "../../reusecore/VintageBox";

import imgAbout from "../../assets/images/hosting/about.png";
import particle1 from "../../assets/images/app/particle/05.png";
import particle2 from "../../assets/images/app/particle/06.png";

import AboutSectionWrapper from "./about.style";

const About = () => {
  return (
    <AboutSectionWrapper id="about">
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
              <h4> About us </h4>
              <h2>
                <span>O Instituto Miriam Pinheiro</span> Nossa inspiração:
                Miriam Pinheiro
              </h2>
            </SectionTitle>
            <p className="about-text text-one">
              Em meio a pandemia que assolou o Brasil, Miriam nos deixou no
              amanhecer do dia 26 de março de 2021. Ela foi uma guerreira e não
              partiu sem antes lutar, especialmente pelas pessoas mais carentes.
              Deixou seus pais, irmãos, três filhos, sobrinhos, e uma legião de
              amigos e apoiadores que nunca se conformaram com a sua partida
              precoce. E para honrar a sua luta criamos o Instituto Miriam
              Naschenveng Pinheiro (IMNP). O nosso objetivo é dar continuidade a
              sua obra. Esperamos fazer jus à imensa generosidade de sua grande
              alma.
            </p>
            <p className="about-text text-two">
              O lema do IMNP é Amar, Cuidar, Proteger!!!! O símbolo, o beija
              flor, pois como ela, o IMNP estará sempre voando entre todos nós
              trazendo amor, paz e esperança
            </p>
            <VintageBox right={true} vintageTwo={true} position="relative">
              <Button>Learn More</Button>
            </VintageBox>
          </Col>
        </Row>
      </Container>
    </AboutSectionWrapper>
  );
};

export default About;
