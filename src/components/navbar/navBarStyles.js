import styled from "styled-components";
import { NavLink } from "react-router-dom";

//Navigation icons//

import { FaHome } from "react-icons/fa";
import { BsPersonCircle } from "react-icons/bs";
import { RiGalleryFill } from "react-icons/ri";
import { MdContactMail } from "react-icons/md";

//Social media icons//

import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";

//----------------//
//Styling of icons//
//----------------//

export const HomeIcon = styled(FaHome)`
  scale: 1.5;
  color: #4678a1;
`;
export const AboutIcon = styled(BsPersonCircle)`
  scale: 1.5;
  color: #4678a1;
`;
export const GalleryIcon = styled(RiGalleryFill)`
  scale: 1.5;
  color: #4678a1;
`;
export const ContactIcon = styled(MdContactMail)`
  scale: 1.5;
  color: #4678a1;
`;
export const LinkedIcon = styled(BsLinkedin)`
  scale: 1.5;
  color: #4678a1;
  padding: 1em;
  transition: 200ms;
  &:hover {
    color: #4e93b3;
    scale: 2;
  }
`;
export const GithubIcon = styled(FaGithubSquare)`
  scale: 1.5;
  color: #4678a1;
  padding: 1em;
  transition: 200ms;
  &:hover {
    color: #4e93b3;
    scale: 2;
  }
`;
export const TwitterIcon = styled(FaTwitterSquare)`
  scale: 1.5;
  color: #4678a1;
  padding: 1em;
  transition: 200ms;
  &:hover {
    color: #4e93b3;
    scale: 2;
  }
`;

//----------------//

export const NavWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 6.5em;
  height: 100vh;
  background: rgba(255, 255, 255, 0.36);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(7px);
  -webkit-backdrop-filter: blur(7px);
  border: 1px solid rgba(255, 255, 255, 0.25);
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
`;

export const TextDeco = styled.small`
  color: #4678a1;
`;

export const NavLinkFlex = styled(NavLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(255, 255, 255, 0.36);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(7px);
  -webkit-backdrop-filter: blur(7px);
  border: 1px solid rgba(255, 255, 255, 0.25);
  padding: 1em 0;
  margin: 0.2em 0;
  border-radius: 0 0.5em 0.5em 0;
  text-decoration: none;
  transition: 200ms;
  &:hover {
    border-radius: 0 1em 1em 0;
  }
  &.active {
    border-radius: 0 2em 2em 0;
    padding-left: 2em;
  }
`;

export const SocialSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 5em;
`;

export const ClockFlex = styled.section`
  display: flex;
  justify-content: center;
`;
