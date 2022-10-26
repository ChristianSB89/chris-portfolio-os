import styled from "styled-components";

export const PortfolioWrapper = styled.section`
  height: 50em;
  width: 30em;
  padding: 1em;
`;

export const PortfolioImg = styled.img`
  height: 30em;
  width: 30em;
`;

export const CtaWrapper = styled.div`
  height: 10em;
`;

export const CtaBtn = styled.a`
  margin-top: 3em;
  padding: 1em 2em;
  color: #4678a1;
  text-decoration: none;
  font-weight: 500;
  text-transform: uppercase;
  border-radius: 4em;
  background: rgba(255, 255, 255, 0.54);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(9.2px);
  -webkit-backdrop-filter: blur(9.2px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: 500ms;
  &:hover {
    background: rgba(255, 255, 255, 1);
  }
`;
