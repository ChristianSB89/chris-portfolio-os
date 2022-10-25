import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LandingPage from "../../pages/LandingPage/LandingPage";
import About from "../../pages/About/About";
import Portfolio from "../../pages/Portfolio/Portfolio";
import Contact from "../../pages/Contact/Contact";

import Clock from "../clock/clock";

import Logo from "../../assets/img/logo.png";

import {
  LogoFlex,
  LogoStyle,
  LiFix,
  NavLinkFlex,
  NavWrapper,
  HomeIcon,
  AboutIcon,
  GalleryIcon,
  ContactIcon,
  TextDeco,
  LinkedIcon,
  GithubIcon,
  TwitterIcon,
  SocialSection,
  ClockFlex,
} from "./navBarStyles";

function NavBar() {
  return (
    <Router>
      <NavWrapper>
        <LogoFlex>
          <LogoStyle src={Logo} />
        </LogoFlex>
        <div>
          <LiFix>
            <NavLinkFlex exact to="/" end>
              <HomeIcon />
              <TextDeco>Hjem</TextDeco>
            </NavLinkFlex>
          </LiFix>
          <LiFix>
            <NavLinkFlex to="/about">
              <AboutIcon />
              <TextDeco>Om meg</TextDeco>
            </NavLinkFlex>
          </LiFix>
          <LiFix>
            <NavLinkFlex to="/portfolio">
              <GalleryIcon />
              <TextDeco>Portefølje</TextDeco>
            </NavLinkFlex>
          </LiFix>
          <LiFix>
            <NavLinkFlex to="/contact">
              <ContactIcon />
              <TextDeco>Kontakt</TextDeco>
            </NavLinkFlex>
          </LiFix>
        </div>

        <SocialSection>
          <a href="https://www.linkedin.com/in/chris-sabre/" target="_blank">
            <LinkedIcon />
          </a>
          <a href="https://github.com/ChristianSB89" target="_blank">
            <GithubIcon />
          </a>
          <a href="https://twitter.com/ChrisSanBrei" target="_blank">
            <TwitterIcon />
          </a>
        </SocialSection>
        <ClockFlex>
          <Clock />
        </ClockFlex>
      </NavWrapper>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default NavBar;
