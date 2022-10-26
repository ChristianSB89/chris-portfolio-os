import React from "react";
import Draggable from "react-draggable";

import Transport from "../../assets/img/transport.png";

import {
  BarTxt,
  CloseIcon,
  Maximize,
  Minimize,
  WindowBar,
  WindowMain,
} from "../../components/global/windowStyle";

import { PageWrapper, TextWrapper } from "../LandingPage/landingPageStyle";
import { ArtWork, Pitch } from "./aboutStyle";

function About() {
  return (
    <Draggable>
      <PageWrapper>
        <WindowMain>
          <WindowBar>
            <BarTxt>Om meg</BarTxt>
            <section className="icon-group">
              <Minimize />
              <Maximize />
              <CloseIcon />
            </section>
          </WindowBar>
          <TextWrapper>
            <ArtWork src={Transport} />
            <Pitch>
              PC entusiast og tech nerd. Jeg har alltid vært nysgjerrig på
              koding og har prøvd meg litt i Python. <br />
              Etter mange timer med modifisering av spill og feilsøking i
              konsoll så fant jeg ut at det var koding jeg ville gjøre. <br />
              Under beltet har jeg kunnskap om HTML, CSS, JavaScript, React,
              Photoshop, Illustrator, Blender og Figma.
            </Pitch>
            <Pitch>
              Har vært gamer siden Super Nintendo kom til Norge i 1992. <br />
              Jeg har vært borti mange konsoller og ble tidlig PC-gamer. Denne
              hobbyen har fulgt meg hele livet.
            </Pitch>
            <Pitch>
              Er også veldig glad i grafisk design og har noe utdanning innen
              faget.
              <br />
              Jobber også en del med 3D modellering, tegner, animerer og lager
              video grafikk. <br />
              Jeg har blant annet laget logoer til band og gamere. <br />
              En annen ting som har fulgt meg gjennom livet er musikk. <br />
              Jeg er også trommeslager og lager musikk på PC med diverse
              programvarer.
            </Pitch>
          </TextWrapper>
        </WindowMain>
      </PageWrapper>
    </Draggable>
  );
}

export default About;
