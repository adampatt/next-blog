import styled from "styled-components";
import { theme } from "../../styles/theme";

export const CardHolder = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

export const CardContainer = styled.div`
  width: 100%;
  border-style: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CardContent = styled.div`
  width: 100%;
  padding: 3% 0 3% 0;
`;

export const CardTitle = styled.h3`
  font-family: ${theme.fonts.heading};
  font-size: 18px;
  font-weight: "light";
  letter-spacing: 1.5px;
`;

export const CardSubHeading = styled.h5`
  font-family: ${theme.fonts.heading};
  font-size: 12px;
  font-weight: "light";
  letter-spacing: 1.5px;
  color: ${theme.colors.Secondary};
  padding-top: 1.5%;
`;

export const CardText = styled.p`
  font-family: ${theme.fonts.body};
  font-size: 14px;
  font-weight: "light";
  letter-spacing: 1.2px;
`;

export const CardTechList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const CardTechListItems = styled.p`
  font-family: ${theme.fonts.body};
  font-size: 14px;
  font-weight: "light";
  letter-spacing: 1.2px;
  padding-right: 1em;
`;

export const LinkList = styled.div`
  display: flex;
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
