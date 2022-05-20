import React from "react";

import { Container, Row, Col } from "../../reusecore/Layout";
import SectionTitle from "../../reusecore/SectionTitle";

import Icon1 from "../../assets/images/hosting/features/01.svg";
import Icon2 from "../../assets/images/hosting/features/02.svg";
import Icon3 from "../../assets/images/hosting/features/03.svg";

import FeturesSectionWrapper from "./fetures.style";

import image1 from "../../assets/images/hosting/roupa.png";
import image2 from "../../assets/images/hosting/sopa.png";
import image3 from "../../assets/images/hosting/prato.png";

const Features = () => {
  return (
    <FeturesSectionWrapper id="nossas-acoes">
      <Container fullWidthSM>
        <SectionTitle className="section-title" UniWidth="100%">
          {/* <h4>service</h4> */}
          <h2>Nossas Ações</h2>
        </SectionTitle>
        <Row>
          {/* <Col xs={12} sm={6} md={4}>
            <div className="fetures-block">              
              <div className="fetures-content-block">
                <h3>Mail server</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt.
                </p>
              </div>
            </div>
          </Col> */}
          <Col xs={12} sm={6} md={4}>
            <div className="fetures-block">
              <div className="fetures-content-block">
                <img src={image1} alt="img" />
                <h3>Alimentos e Roupas</h3>
                <p>
                  Distribuição de mais de uma tonelada de alimentos e roupas
                  para famílias em Várzea Grande.
                </p>
              </div>
            </div>
          </Col>
          <Col xs={12} sm={6} md={4}>
            <div className="fetures-block">
              <div className="fetures-content-block">
                <img src={image2} alt="img" />
                <h3>Sopão da Dani</h3>
                <p>Contribuição para o Sopão da Dani no bairro São Mateus</p>
              </div>
            </div>
          </Col>
          <Col xs={12} sm={6} md={4}>
            <div className="fetures-block">
              <div className="fetures-content-block">
                <img src={image3} alt="img" />
                <h3>Jantar comunitário</h3>
                <p>
                  Contribuição para o jantar comunitário coordenado pela
                  Marilene Pinheiro no Cinturão Verde.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </FeturesSectionWrapper>
  );
};

export default Features;
