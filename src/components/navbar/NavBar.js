import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LandingPage from "../../pages/LandingPage/LandingPage";
import About from "../../pages/About/About";
import Portfolio from "../../pages/Portfolio/Portfolio";
import Contact from "../../pages/Contact/Contact";

import { FaHome } from "react-icons/fa";
import { BsPersonCircle } from "react-icons/bs";
import { RiGalleryFill } from "react-icons/ri";
import { MdContactMail } from "react-icons/md";

import Logo from "../../assets/img/logo.png";

import {
  ClockStyle,
  LogoFlex,
  LogoStyle,
  LiFix,
  NavLinkFlex,
  NavWrapper,
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
              <FaHome />
              <small>Hjem</small>
            </NavLinkFlex>
          </LiFix>
          <LiFix>
            <NavLinkFlex to="/about">
              <BsPersonCircle />
              <small>Om meg</small>
            </NavLinkFlex>
          </LiFix>
          <LiFix>
            <NavLinkFlex to="/portfolio">
              <RiGalleryFill />
              <small>Portefølje</small>
            </NavLinkFlex>
          </LiFix>
          <LiFix>
            <NavLinkFlex to="/contact">
              <MdContactMail />
              <small>Kontakt</small>
            </NavLinkFlex>
          </LiFix>
        </div>
        <ClockStyle
          src="https://free.timeanddate.com/clock/i8k81z34/n290/tlno10/tct/pct/tt0/tw0/tm1/ts1/tb4"
          frameborder="0"
          allowtransparency="true"
        ></ClockStyle>
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
