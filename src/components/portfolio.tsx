import React from "react";
import { data } from "../data/projectData";
import {
  CardHolder,
  CardContainer,
  CardContent,
  CardTitle,
  CardSubHeading,
  CardText,
  CardTechList,
  CardTechListItems,
  LinkList,
  Tags,
} from "./card.styles";
import Link from "next/link";

export default function Portfolio() {
  return (
    <>
      <h1>Projects</h1>
      <CardHolder>
        {data.map((project) => (
          <>
            <CardContainer key={project.title}>
              <CardContent>
                <CardTitle>{project.title}</CardTitle>
                <CardSubHeading>{project.subtitle}</CardSubHeading>
                <CardText>{project.details}</CardText>
                <CardSubHeading>Links</CardSubHeading>
                <LinkList>
                  <Tags>
                    <Link href={project.link} passHref={true}>
                      project
                    </Link>
                  </Tags>
                  <Tags>
                    <Link href={project.githubLink} passHref={true}>
                      github
                    </Link>
                  </Tags>
                </LinkList>
                <div>
                  <CardSubHeading>Technologies used</CardSubHeading>
                  <CardTechList>
                    {project.list.map((project) => (
                      <CardTechListItems key={project}>
                        {project}
                      </CardTechListItems>
                    ))}
                  </CardTechList>
                </div>
              </CardContent>
            </CardContainer>
          </>
        ))}
      </CardHolder>
    </>
  );
}
