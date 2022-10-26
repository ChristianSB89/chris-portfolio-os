import React from "react";
import {
  BarTxt,
  CloseIcon,
  Maximize,
  Minimize,
  WindowBar,
  WindowMain,
} from "../../components/global/windowStyle";
import { PageWrapper } from "../LandingPage/landingPageStyle";
import PortfolioContainer from "./PortfolioContainer";

function Portfolio() {
  return (
    <PageWrapper>
      <WindowMain>
        <WindowBar>
          <BarTxt>Portefølje</BarTxt>
          <section className="icon-group">
            <Minimize />
            <Maximize />
            <CloseIcon />
          </section>
        </WindowBar>
        <PortfolioContainer />
      </WindowMain>
    </PageWrapper>
  );
}

export default Portfolio;
