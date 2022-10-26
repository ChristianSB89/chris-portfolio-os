import styled from "styled-components";

export const PageWrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const TextWrapper = styled.section`
  display: flex;
  flex-direction: column;
  padding: 1em;
`;

export const TextContent = styled.p`
  margin: 0;
  padding: 0.5em 0;
  font-weight: 500;
  color: #1c3045;
`;

export const ContentWrapper = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ImgBtnGroup = styled.div`
  padding: 1em;
`;

export const ImageStyle = styled.img`
  width: 30em;
  height: 30em;
  object-fit: cover;
  object-position: top;
  background: radial-gradient(
    circle,
    rgba(67, 109, 153, 1) 14%,
    rgba(106, 244, 247, 0) 70%
  );
  border-radius: 30em;
  transition: 500ms;
  &:hover {
    rotate: 5deg;
  }
`;

export const CTA = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const StyledBtn = styled.a`
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
