import React from "react";
import { FaSearch } from "react-icons/fa";

import { Container, Row, Col } from "reusecore/Layout";
import SectionTitle from "reusecore/SectionTitle";
import Button from "reusecore/Button";
import Particle from "reusecore/Particle";
import VintageBox from "reusecore/VintageBox";

import { FaPlay, FaDownload } from "react-icons/fa";

import { BannerSectionWrapper, AboutSectionWrapper } from "./banner.style";
import imgHero1 from "assets/images/hosting/banner/01.png";
import imgHero2 from "assets/images/hosting/banner/02.png";

const BannerHosting = () => {
  return (
    <BannerSectionWrapper>
      <img src={imgHero1} alt="img" className="section-particle one" />
      <Particle />
      <Container fullWidthSM>
        <Row Vcenter={true}>
          <Col lg={6}>
            <AboutSectionWrapper id="about">
              <SectionTitle
                className="section-title"
                leftAlign={true}
                UniWidth="100%"
              >
                <h4> Amar, proteger e cuidar </h4>
                <h2>
                  <span> Nossa inspiração:</span> <br />
                  Miriam Pinheiro
                </h2>
              </SectionTitle>
              <p className="about-text text-one">
                Em meio a pandemia que assolou o Brasil, Miriam nos deixou no
                amanhecer do dia 26 de março de 2021. Ela foi uma guerreira e
                não partiu sem antes lutar, especialmente pelas pessoas mais
                carentes. Deixou seus pais, irmãos, três filhos, sobrinhos, e
                uma legião de amigos e apoiadores que nunca se conformaram com a
                sua partida precoce. E para honrar a sua luta criamos o
                Instituto Miriam Naschenveng Pinheiro (IMNP). O nosso objetivo é
                dar continuidade a sua obra. Esperamos fazer jus à imensa
                generosidade de sua grande alma.
              </p>
              <p className="about-text text-two">
                O lema do IMNP é Amar, Cuidar, Proteger!!!! O símbolo, o beija
                flor, pois como ela, o IMNP estará sempre voando entre todos nós
                trazendo amor, paz e esperança
              </p>
              <VintageBox right={true} vintageTwo={true} position="relative">
                <Button>Saiba Mais</Button>
              </VintageBox>
            </AboutSectionWrapper>
          </Col>
          <Col lg={6}>
            <div className="hero-img-block">
              <img src={imgHero2} alt="img" />
            </div>
          </Col>
        </Row>
      </Container>
    </BannerSectionWrapper>
  );
};

export default BannerHosting;
