import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "../../reusecore/Layout";
import SectionTitle from "../../reusecore/SectionTitle";

import { TiMessageTyping, TiHeartOutline } from "react-icons/ti";

import imgNews1 from "../../assets/images/app/news/news-thumb-1.png";
import imgNews2 from "../../assets/images/app/news/news-thumb-2.png";
import imgNews3 from "../../assets/images/app/news/news-thumb-3.png";
import particle1 from "../../assets/images/app/particle/16.png";
import particle2 from "../../assets/images/app/particle/09.png";

import NewsSectionWrapper from "./newsSection.style";

const News = () => {
  return (
    <NewsSectionWrapper>
      <img className="section__particle one" src={particle1} alt="img" />
      <img className="section__particle two" src={particle2} alt="img" />
      <Container>
        <SectionTitle className="section-title" UniWidth="52%">
          <h4>Blog post</h4>
          <h2>
            <span>Check our latest blog post </span> for more update.
          </h2>
        </SectionTitle>
        <Row>
          <Col xs={12} sm={6} lg={4}>
            <div className="news-wrap">
              <div className="thumb-block">
                <span href="/blog-single">
                  <img src={imgNews1} alt="img" />
                </span>
              </div>
              <div className="post-meta-block">
                <span href="/blog-single">
                  <a>Discussion</a>
                </span>
                <span className="divider">/</span>
                <span>15 Sep, 2021</span>
              </div>
              <h2 className="title">
                <span href="/blog-single">
                  <a>Rhetoric me avoid may lowest even quite first.</a>
                </span>
              </h2>
              <div className="post-reaction-block">
                <span href="/blog-single">
                  <a>
                    <TiMessageTyping /> 05 Comment
                  </a>
                </span>
                <span href="/blog-single">
                  <a>
                    <TiHeartOutline /> 152 Like
                  </a>
                </span>
              </div>
            </div>
          </Col>

          <Col xs={12} sm={6} lg={4}>
            <div className="news-wrap">
              <div className="thumb-block">
                <span href="/blog-single">
                  <img src={imgNews2} alt="img" />
                </span>
              </div>
              <div className="post-meta-block">
                <span href="/blog-single">
                  <a>Discussion</a>
                </span>
                <span className="divider">/</span>
                <span>15 Sep, 2021</span>
              </div>
              <h2 className="title">
                <span href="/blog-single">
                  <a>Rhetoric me avoid may lowest even quite first.</a>
                </span>
              </h2>
              <div className="post-reaction-block">
                <span href="/blog-single">
                  <a>
                    <TiMessageTyping /> 05 Comment
                  </a>
                </span>
                <span href="/blog-single">
                  <a>
                    <TiHeartOutline /> 152 Like
                  </a>
                </span>
              </div>
            </div>
          </Col>
          <Col xs={12} sm={6} lg={4}>
            <div className="news-wrap">
              <div className="thumb-block">
                <span href="/blog-single">
                  <img src={imgNews3} alt="img" />
                </span>
              </div>
              <div className="post-meta-block">
                <span href="/blog-single">
                  <a>Discussion</a>
                </span>
                <span className="divider">/</span>
                <span>15 Sep, 2021</span>
              </div>
              <h2 className="title">
                <span href="/blog-single">
                  <a>Rhetoric me avoid may lowest even quite first.</a>
                </span>
              </h2>
              <div className="post-reaction-block">
                <span href="/blog-single">
                  <a>
                    <TiMessageTyping /> 05 Comment
                  </a>
                </span>
                <span href="/blog-single">
                  <a>
                    <TiHeartOutline /> 152 Like
                  </a>
                </span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </NewsSectionWrapper>
  );
};

export default News;
