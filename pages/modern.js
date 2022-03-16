import React from "react";
import { ThemeProvider } from "styled-components";

import Main from "../src/components/main";

import Navigation from "sections/Navigation";
import Banner from "sections/Banner-modern";
import About from "sections/About";
import Features from "sections/Features";
import Faq from "sections/Faq";
import Integrations from "sections/Integrations";
import AppScreens from "sections/AppScreens";
import Counters from "sections/Counters";
import Pricing from "sections/Pricing";
import Testimonial from "sections/Testimonial";
import News from "sections/News";
import Getapp from "sections/Getapp";
import Contact from "sections/Contact";
import Footer from "sections/Footer";

import { GlobalStyle } from "sections/app.style";
import theme from "theme/modern/themeStyles";

const Home = () => (
  <ThemeProvider theme={theme}>
    <Main title="Appion React Gatsby nextjs landing">
      <GlobalStyle />
      <Navigation />
      <Banner />
      <About />
      <Integrations />
      <Features />
      <AppScreens />
      <Counters />
      <Pricing />
      <Testimonial />
      <Faq />
      <Getapp />
      <News />
      <Contact />
      <Footer />
    </Main>
  </ThemeProvider>
);

export default Home;
