import React from "react";

import CV from "../../assets/documents/cv.pdf";

import ProfileImg from "../../assets/img/side-shot.png";
import {
  ContentWrapper,
  CTA,
  ImageStyle,
  NameTag,
  PageWrapper,
  StyledBtn,
  TextAlignLeft,
  TextAlignRight,
  TextStyle,
} from "./landingPageStyle";

function LandingPage() {
  return (
    <PageWrapper>
      <ContentWrapper>
        <TextAlignRight>
          <TextStyle>Frontend utvikler</TextStyle>
          <TextStyle>Tech nerd</TextStyle>
        </TextAlignRight>
        <section className="name-pic-collector">
          <NameTag>Christian Sandum Breivik</NameTag>
          <ImageStyle src={ProfileImg} />
        </section>
        <TextAlignLeft>
          <TextStyle>Grafisk designer</TextStyle>
          <TextStyle>Illustratør</TextStyle>
        </TextAlignLeft>
      </ContentWrapper>
      <CTA>
        <StyledBtn href={CV} download>
          Last ned CV
        </StyledBtn>
      </CTA>
    </PageWrapper>
  );
}

export default LandingPage;
