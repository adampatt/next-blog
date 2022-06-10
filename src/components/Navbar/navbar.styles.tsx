import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const StyledNavBar = styled.nav`
  display: flex;
  justify-content: space-evenly;
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
