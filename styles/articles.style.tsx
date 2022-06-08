import styled from "styled-components";
import { theme } from "./theme";

export const Title = styled.h3`
  font-family: ${theme.fonts.heading};
  font-size: 18px;
  font-weight: "light";
  letter-spacing: 1.5px;
  padding-top: 1.5%;

  a {
    color: ${theme.colors.Primary};
    text-decoration: none;
  }

  a:hover {
    color: ${theme.colors.LightGreen};
  }
`;

export const Tags = styled.p`
  font-family: ${theme.fonts.body};
  font-size: 14px;
  font-weight: "light";
  letter-spacing: 1.2px;
  text-decoration: none;

  a {
    padding-right: 0.5em;
    cursor: pointer;
    color: orange;
    text-decoration: none;
  }

  a:hover {
    color: ${theme.colors.LightGreen};
  }
`;

export const Text = styled.p`
  font-family: ${theme.fonts.body};
  font-size: 14px;
  font-weight: "light";
  letter-spacing: 1.2px;
`;
