import React from "react";
import { ThemeProvider } from "styled-components";

import Main from "../src/components/main";

import Navigation from "sections/Navigation-crypto";
import Banner from "sections/Banner-crypto";
import Services from "sections/Services-crypto";
import PreSell from "sections/PreSell";
import Features from "sections/Features-crypto";
import Faq from "sections/Faq-crypto";
import Sefty from "sections/Sefty-crypto"; 
import BuyCoin from "sections/Buy-coin"; 
import Counters from "sections/Counters-crypto"; 
import Testimonial from "sections/Testimonial-crypto";
import News from "sections/News";
import Getapp from "sections/Getapp-crypto";
import Contact from "sections/Contact-crypto";
import Footer from "sections/Footer-crypto";

import { GlobalStyle } from "theme/crypto/crypto.style";
import theme from "theme/crypto/themeStyles";

const Home = () => (
  <ThemeProvider theme={theme}>
    <Main title="Appion React Gatsby nextjs landing">
      <GlobalStyle />
      <Navigation />
      <Banner />
      <Services />
      <PreSell />
      <Sefty />
      <BuyCoin />
      <Features /> 
      <Counters /> 
      <Getapp />
      <Testimonial />
      <Faq />
      <News />
      <Contact />
      <Footer />
    </Main>
  </ThemeProvider>
);

export default Home;
