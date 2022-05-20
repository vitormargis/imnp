import React from "react";

import { Container, Row, Col } from "../../reusecore/Layout";
import Counter from "../../reusecore/Counter";

import CounterSectionWrapper from "./counterSection.style";

const Counters = () => {
  return (
    <CounterSectionWrapper>
      <Container>
        <Row>
          <Col xs={12} sm={6} lg={4}>
            <div className="counter__item">
              <Counter end={1} suffix="+ tonelada" />
              <p>de Roupa e alimentos</p>
            </div>
          </Col>
          <Col xs={12} sm={6} lg={4}>
            <div className="counter__item">
              <Counter end={10} suffix="+" />
              <p>Sopões Realizados</p>
            </div>
          </Col>
          <Col xs={12} sm={6} lg={4}>
            <div className="counter__item">
              <Counter end={5} suffix="+" />
              <p>Jantares Realizados</p>
            </div>
          </Col>
        </Row>
      </Container>
    </CounterSectionWrapper>
  );
};

export default Counters;
