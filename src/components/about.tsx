import React from "react";
import { CardHolder, CardText } from "./card.styles";

export const About = () => {
  return (
    <CardHolder>
      <h1>About</h1>
      <CardText style={{ paddingTop: "1.5%", paddingBottom: "1.5%" }}>
        Hi, I'm Adam. I am a software developer who loves working with
        Javascript. You can check out of my projects here and blog posts here.
      </CardText>
    </CardHolder>
  );
};
