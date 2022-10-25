import styled from "styled-components";

import { NavLink } from "react-router-dom";

export const NavWrapper = styled.nav`
  border: red solid 2px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 6.5em;
  height: 100vh;
  background: lightgray;
  border-radius: 0 1em 1em 0;
`;

export const LogoFlex = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LogoStyle = styled.img`
  width: 3.5em;
  margin: 1em 0;
`;

export const LiFix = styled.li`
  list-style: none;
  padding: 2em 0;
  margin: 0.2em 0;
  background: white;
  border-radius: 0 2em 2em 0;
`;

export const NavLinkFlex = styled(NavLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ClockStyle = styled.iframe`
  width: 6em;
  height: 2em;
  border: none;
  padding-top: 20em;
`;
