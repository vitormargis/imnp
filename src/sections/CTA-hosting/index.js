import React from "react";

import { Container, Row, Col } from "../../reusecore/Layout";
import Button from "../../reusecore/Button";
import VintageBox from "../../reusecore/VintageBox";

import CTASectionWrapper from "./CTASection.style";

import image1 from "../../assets/images/hosting/doar.png";

const CTAHosting = () => {
  return (
    <div id="como-doar">
      <CTASectionWrapper>
        <Container>
          <Row Vcenter={true}>
            <Col xs={12} sm={6} lg={5}>
              <div className="CTA-content">
                <h2>
                  Doe Agora
                  <br />
                </h2>
                <p style={{ marginBottom: 10 }}>
                  Escolha como quer fazer a sua doação:
                  <br />
                  <br />
                  <h3>Pix</h3>pix@institutomiriampinheiro.org.br
                  <br />
                  <br />
                  <h3>Paypal</h3>
                </p>
                <VintageBox right={true} vintageTwo={true} position="relative">
                  <Button>Doe aqui</Button>
                </VintageBox>
              </div>
            </Col>
            <Col xs={12} sm={6} lg={7}>
              <div className="CTA-img">
                <img src={image1} alt="img" />
              </div>
            </Col>
          </Row>
        </Container>
      </CTASectionWrapper>
    </div>
  );
};

export default CTAHosting;
