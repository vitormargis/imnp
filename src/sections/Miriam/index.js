import React from "react";

import { Container } from "../../reusecore/Layout";
import SectionTitle from "../../reusecore/SectionTitle";
import Button from "../../reusecore/Button";

import ContactWrapper from "./contact.style";

const Contact = () => {
  return (
    <ContactWrapper id="miriam">
      <SectionTitle className="section-title" UniWidth="55%">
        <h2>
          QUEM FOI <span>MIRIAM PINHEIRO</span>
        </h2>
      </SectionTitle>
      <Container>
        <p
          style={{
            textAlign: "center",
            fontWeight: 200,
            fontSize: "18px",
            lineHeight: "1.8em",
          }}
        >
          Miriam Naschenveng Pinheiro nasceu em Cuiabá em 13 de novembro 1963,
          filha de Aníbal Pinheiro da Silva e de Marli Naschenveng Pinheiro,
          formou-se em enfermagem pela Universidade Federal de Mato Grosso. Era
          pós-graduada em Gestão Pública, Saúde da Família e Administração de
          Serviços da Saúde. Atuou por 30 anos na área da sáude em Mato Grosso.
          Miriam foi Diretora de Atenção Primária na Secretaria Municipal de
          Saúde de Cuiabá e Secretária Adjunta de Atenção Primária. Miriam
          Pinheiro foi vereadora na Câmara de Várzea Grande.
        </p>
      </Container>
    </ContactWrapper>
  );
};

export default Contact;
