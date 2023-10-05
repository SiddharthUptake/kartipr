import React from "react";
import { Col, Container, Row } from "reactstrap";
import "./home.css";
import justice from "../assets/justice.png";

function Trust() {
  return (
    <div className="mt-3">
      <Container>
        <div className="d-flex justify-content-center align-items-center">
          <span className="trust-text">Why Trust us</span>
        </div>
        <Row>
          <Col lg="6">
            <div className="justice-img d-flex justify-content-center align-items-center mt-5">
              <img src={justice} alt="" />
            </div>
          </Col>
          <Col lg="6">
            <div className="mt-5 d-flex flex-column justify-content-center">
              <span className="mb-3 justice-line">
                Kart <span className="font-weight-bolder">IPR</span> people are
                the Intangible Asset Specialists.
              </span>
              <ul>
                <li>
                  Recognised as one of the top 10 Business Valuation Companies
                  Globally by CFO Tech Magazine.
                </li>
                <li>
                  Recognised on the Financial Times High Growth Companies Asia
                  2022 rankings
                </li>
                <li>
                  Nine times ranked as World’s Top Intellectual Asset Management
                  Strategists 2012 - 2021
                </li>
              </ul>
            </div>
          </Col>
        </Row>
        <div className="d-flex flex-row justify-content-center align-items-center mt-5">
        <span>Our deep technical expertise and more than a decade of  Experience  in delivering for our clients has seen us successfully work across a diverse range of Intellectual Properties where our aim includes :</span>
        </div>
      </Container>
    </div>
  );
}

export default Trust;
