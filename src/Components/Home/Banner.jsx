import React from "react";
import { Button, Container } from "reactstrap";
import "./home.css";
import Appoinment from "./Appoinment";
import SliderView from "./SliderView";
import Trust from "./Trust";
function Banner() {
  return (
    <section className="home-main">
      <div className="hero-banner">
        <Container fluid>
          <div className="first-section">
            <span className="buy-sell">
              Buy & Sell <span className="your">Your</span>
            </span>
            <span className="intell-prop">Intellectual property</span>
            <span className="gateway">
              Your Gateway to Intellectual Property Trading.
            </span>
            <div className="btn-couple mt-5">
              <button>Buy</button>
              <button>Sell</button>
            </div>
            <span className="premier mt-3">
              India's Premier IP Rights Marketplace
            </span>
          </div>
        </Container>
      </div>
      <Appoinment/>
      <SliderView/>
      <Trust/>
    </section>
  );
}

export default Banner;
