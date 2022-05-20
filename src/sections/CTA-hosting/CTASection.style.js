import styled from "styled-components";

const CTASectionWrapper = styled.div`
  padding: 140px 0 150px 0;
  position: relative;
  .CTA-img {
    width: 100%;
    float: right;
    filter: blur(3px);
    opacity: 0.25;
  }
  .CTA-content {
    h2 {
      font-size: 40px;
      line-height: 56px;
      font-weight: 600;
      margin-bottom: 30px;
    }
    p {
      font-weight: 300;
      margin-bottom: 45px;
    }
  }

  @media only screen and (max-width: 1024px) {
    .CTA-content {
      h2 {
        font-size: 35px;
        line-height: 45px;
      }
    }
  }
  @media only screen and (max-width: 912px) {
    padding: 140px 0 120px 0;
    .CTA-content {
      h2 {
        font-size: 28px;
        line-height: 38px;
      }
    }
  }
  @media only screen and (max-width: 568px) {
    .CTA-content {
      text-align: center;
      margin-bottom: 70px;
    }
  }
`;

export default CTASectionWrapper;
