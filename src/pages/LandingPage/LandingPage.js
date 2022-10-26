import React from "react";
import Draggable from "react-draggable";
import CV from "../../assets/documents/cv.pdf";

import ProfileImg from "../../assets/img/side-shot.png";
import {
  ContentWrapper,
  CTA,
  ImageStyle,
  ImgBtnGroup,
  PageWrapper,
  StyledBtn,
  TextContent,
  TextWrapper,
} from "./landingPageStyle";

import {
  WindowMain,
  WindowBar,
  BarTxt,
  Minimize,
  Maximize,
  CloseIcon,
} from "../../components/global/windowStyle";

function LandingPage() {
  return (
    <Draggable>
      <PageWrapper>
        <WindowMain>
          <WindowBar>
            <BarTxt>Christian Sandum Breivik</BarTxt>
            <section className="icon-group">
              <Minimize />
              <Maximize />
              <CloseIcon />
            </section>
          </WindowBar>
          <ContentWrapper>
            <ImgBtnGroup>
              <ImageStyle src={ProfileImg} />
              <CTA>
                <StyledBtn href={CV} download>
                  Last ned CV
                </StyledBtn>
              </CTA>
            </ImgBtnGroup>
            <TextWrapper>
              <TextContent>Frontend utvikler</TextContent>
              <TextContent>Tech nerd</TextContent>
              <TextContent>Grafisk designer</TextContent>
              <TextContent>Illustratør</TextContent>
            </TextWrapper>
          </ContentWrapper>
        </WindowMain>
      </PageWrapper>
    </Draggable>
  );
}

export default LandingPage;
