import styled from "styled-components";

export const BannerSectionWrapper = styled.div`
  padding: 130px 0 120px 0;
  position: relative;
  .section-particle {
    position: absolute;
    z-index: 1;
    &.one {
      top: -4%;
      right: 15%;
    }
  }
  .section-title {
    z-index: 99;
    position: relative;
    text-align: left;
    h4 {
      color: #413c69;
      font-size: 20px;
      line-height: 25px;
      font-weight: 400;
      margin-bottom: 20px;
      span {
        background: #e15650;
        padding: 3px 15px;
        border-radius: 20px;
        color: #fff;
        font-size: 15px;
      }
    }
    h1 {
      font-size: 33px;
      font-weight: 600;
      line-height: 42px;
      color: #413c69;
      margin-bottom: 25px;
    }
    p {
      font-size: 20px;
      line-height: 25px;
      font-weight: 400;
      color: #413c69;
      margin: 0 0 70px 0;
    }
  }
  .domain-search-block {
    .search-box {
      position: relative;
      width: 90%;
    }
    input {
      height: 80px;
      border: none;
      background: #fff;
      width: 100%;
      padding: 20px 30px;
      font-size: 18px;
      border-radius: 50px;
      box-shadow: rgba(206, 206, 206, 0.78) 0px 1px 23px -8px;
    }
    .src-btn {
      position: absolute;
      top: 0;
      right: -1px;
      width: 126px;
      min-width: auto;
      height: 80px;
      line-height: 80px;
      border-radius: 50px;
      background: ${(props) => props.theme.primaryColor};
      color: #fff;
      svg {
        font-size: 30px;
        color: #fff;
      }
    }
    .domain-extention-block {
      text-align: left;
      margin-top: 40px;
      span {
        cursor: pointer;
        height: 60px;
        width: 60px;
        display: inline-block;
        border-radius: 8px;
        box-shadow: rgba(206, 206, 206, 0.78) 0px 1px 23px -8px;
        font-size: 15px;
        text-align: center;
        line-height: 60px;
      }
      span + span {
        margin-left: 20px;
      }
      .com {
        color: #e7a8ca;
        box-shadow: rgba(231, 168, 202, 0.78) 0px 1px 23px -8px;
      }
      .org {
        color: #a29bfe;
        box-shadow: rgba(162, 155, 254, 0.78) 0px 1px 23px -8px;
      }
      .net {
        color: #0984e3;
        box-shadow: rgba(9, 132, 227, 0.78) 0px 1px 23px -8px;
      }
      .dev {
        color: #ad62aa;
        box-shadow: rgba(173, 98, 170, 0.78) 0px 1px 23px -8px;
      }
      .xyz {
        color: #413c69;
        box-shadow: rgba(65, 60, 105, 0.78) 0px 1px 23px -8px;
      }
    }
  }
  .hero-img-block {
    margin-left: 50px;
    animation: smooth-up-down 3s linear infinite;
  }
  .hero-img-block img {
    width: 120%;
    opacity: 0.15;
    filter: blur(0px);
    max-width: none !important;
    margin: 50px 0 0 -10%;
  }

  /**
    * ----------------------------------------
    * animation smooth-up-down
    * ----------------------------------------
    **/

  @keyframes smooth-up-down {
    0% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
    20% {
      -webkit-transform: translateY(-10px);
      transform: ttranslateY(-10px);
    }
    50% {
      -webkit-transform: translateY(-20px);
      transform: ttranslateY(-20px);
    }
    70% {
      -webkit-transform: translateY(-10px);
      transform: ttranslateY(-10px);
    }
    100% {
      -webkit-transform: translateY(0px);
      transform: ttranslateY(0px);
    }
  }

  @-moz-keyframes smooth-up-down {
    0% {
      -moz-transform: rotate(-80deg);
      transform: rotate(-80deg);
    }
    20% {
      -moz-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    50% {
      -moz-transform: rotate(80deg);
      transform: rotate(80deg);
    }
    70% {
      -moz-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -moz-transform: rotate(-80deg);
      transform: rotate(-80deg);
    }
  }

  @-webkit-keyframes smooth-up-down {
    0% {
      -webkit-transform: rotate(-80deg);
      transform: rotate(-80deg);
    }
    20% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    50% {
      -webkit-transform: rotate(80deg);
      transform: rotate(80deg);
    }
    70% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(-80deg);
      transform: rotate(-80deg);
    }
  }

  @-o-keyframes smooth-up-down {
    0% {
      -o-transform: rotate(-80deg);
      transform: rotate(-80deg);
    }
    20% {
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    50% {
      -o-transform: rotate(80deg);
      transform: rotate(80deg);
    }
    70% {
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -o-transform: rotate(-80deg);
      transform: rotate(-80deg);
    }
  }

  @-ms-keyframes smooth-up-down {
    0% {
      -ms-transform: rotate(-80deg);
      transform: rotate(-80deg);
    }
    20% {
      -ms-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    50% {
      -ms-transform: rotate(80deg);
      transform: rotate(80deg);
    }
    70% {
      -ms-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -ms-transform: rotate(-80deg);
      transform: rotate(-80deg);
    }
  }

  @media only screen and (max-width: 1600px) {
    .section-particle {
      &.one {
        right: 0%;
      }
    }
  }
  @media only screen and (max-width: 912px) {
    margin: 30px 0 0 0;
    padding: 120px 0 60px 0;
    .section-title {
      text-align: center;
      br {
        display: none;
      }
      h1 {
        font-size: 32px;
        line-height: 42px;
        margin: 0 0 25px 0;
      }
    }
    p {
      margin: 0 0 30px 0;
    }
    .domain-search-block {
      margin-bottom: 30px;
      .search-box {
        width: 100%;
      }
      .domain-extention-block {
        text-align: center;
      }
    }
    .hero-img-block {
      margin-left: 0;
    }
  }
  @media only screen and (max-width: 760px) {
    padding: 130px 0 60px 0;
  }
  @media only screen and (max-width: 568px) {
    background: none;
    .hero-img-block {
      display: none;
    }
  }
  @media only screen and (max-width: 480px) {
    padding: 120px 0 100px 0;
    .section-title {
      h1 {
        font-size: 35px;
        line-height: 50px;
      }
    }
    .domain-search-block {
      .domain-extention-block {
        span {
          height: 40px;
          width: 40px;
          line-height: 40px;
          font-size: 12px;
        }
      }
      .src-btn {
        width: 80px;
        height: 70px;
      }
      input {
        height: 70px;
      }
    }
  }
  @media only screen and (max-width: 380px) {
    .section-title {
      h1 {
        font-size: 30px;
        line-height: 46px;
        margin: 0 0 30px 0;
      }
      h4 {
        font-size: 15px;
      }
    }
  }
  @media only screen and (max-width: 330px) {
    .section-title {
      h1 {
        font-size: 23px;
        line-height: 35px;
      }
    }
  }
`;
export const AboutSectionWrapper = styled.div`
  padding: 120px 0;
  position: relative;
  .section__particle {
    position: absolute;
    &.one {
      right: 9%;
      top: 19%;
      height: 34px;
      width: 40px;
      transform: rotate(-45deg);
    }
    &.two {
      width: 150px;
      top: auto;
      bottom: 80px;
      left: -22px;
    }
  }

  .about-thumb {
    width: 100%;
    transform: translateX(-80px);
    display: inline-block;
  }
  .about-text.text-one {
    font-weight: 300;
    margin-bottom: 28px;
  }

  .about-text.text-two {
    color: ${(props) => props.theme.headingColor};
    font-weight: 400;
    margin-bottom: 80px;
  }
  .section-title {
    h2 {
      margin-bottom: 38px;
    }
  }

  @media only screen and (max-width: 1400px) {
    .about-thumb {
      transform: translateX(0px);
    }
    .section__particle {
      &.one {
        top: 9%;
      }
      &.two {
        bottom: -92px;
        left: -38px;
      }
    }
  }
  @media only screen and (max-width: 1024px) {
    .section__particle {
      &.one {
        top: 0%;
      }
    }
  }
  @media only screen and (max-width: 912px) {
    padding: 100px 0 60px 0;
    .section-title h2 {
      margin-bottom: 20px;
    }
    .about-text.text-two {
      margin-bottom: 30px;
    }
  }
  @media only screen and (max-width: 760px) {
    padding: 60px 0 60px 0;
    .about-thumb {
      margin-bottom: 70px;
    }
  }
  @media only screen and (max-width: 568px) {
    .section-title,
    .about-content-wrap {
      text-align: center;
    }
    .section-title {
      img {
        display: none;
      }
      h4 {
        width: 100%;
      }
    }
  }
  @media only screen and (max-width: 480px) {
    padding: 40px 0 60px 0;
  }
`;
