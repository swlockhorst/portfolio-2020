import React, { useState } from "react";
import { graphql, Link } from "gatsby";
import styled from "@emotion/styled";

import Layout from "../components/layout";
import SEO from "../components/seo";
import ProjectPane from "../components/projectPane";
import AspectObject from "../components/aspectObject";
import { fonts, breakpoints, settings } from "../constants";
import { useWindowDimensions } from "../utils";

const IndexPage = (data) => {
  const [selectedProject, setSelectedProject] = useState(
    data.data.allContentfulProject.edges[0].node
  );

  const { height, width } = useWindowDimensions();

  console.log("active project is ", selectedProject);
  return (
    <>
      <Layout>
        <SEO title="Home" />
        <Intro>
          <IntroPic>
            <AspectObject
              ratioWidth={1}
              ratioHeight={1}
              backgroundColor={"#000"}
            >
              <img src={data.data.contentfulPage.images[0].file.url} alt="" />
            </AspectObject>
          </IntroPic>
          <IntroBody>
            {data.data.contentfulPage.body.content[0].content[0].value}
          </IntroBody>
          <div>
            <ContactLabel>How to contact me:</ContactLabel>
            <IntroLinks>
              {data.data.contentfulPage.socialMediaLinks.map((link, index) => {
                return (
                  <li key={index}>
                    <a href={link.href}>{link.title}</a>
                  </li>
                );
              })}
            </IntroLinks>
          </div>
        </Intro>
        <BodyLabel>Projects</BodyLabel>
        <BodyLayout>
          {width > 960 && (
            <ProjectPaneContainer>
              <ProjectPane data={selectedProject} />
            </ProjectPaneContainer>
          )}

          <Grid>
            {data.data.allContentfulProject.edges.map((edge) => {
              return (
                <li key={edge.node.title}>
                  {width < 960 ? (
                    <Link to={`/${edge.node.slug}/`}>
                      <Tile onClick={() => setSelectedProject(edge.node)}>
                        <TileFrameTopBottom className={`frame`} />
                        <TileFrameLeftRight className={`frame`} />
                        <AspectObject
                          ratioWidth={8}
                          ratioHeight={6}
                          backgroundColor={"#000"}
                        >
                          <img src={edge.node.poster.sizes.src} alt={""} />
                        </AspectObject>
                        <Label>
                          <LabelTop>{edge.node.title}</LabelTop>

                          <LabelBottom>{edge.node.client}</LabelBottom>
                        </Label>
                      </Tile>
                    </Link>
                  ) : (
                    <Tile onClick={() => setSelectedProject(edge.node)}>
                      <TileFrameTopBottom className={`frame`} />
                      <TileFrameLeftRight className={`frame`} />
                      <AspectObject
                        ratioWidth={8}
                        ratioHeight={6}
                        backgroundColor={"#000"}
                      >
                        <img src={edge.node.poster.sizes.src} alt={""} />
                      </AspectObject>
                    </Tile>
                  )}
                </li>
              );
            })}
          </Grid>
        </BodyLayout>
      </Layout>
    </>
  );
};

export default IndexPage;

export const query = graphql`
  {
    contentfulPage(title: { eq: "About" }) {
      slug
      title
      body {
        content {
          content {
            value
          }
        }
      }
      images {
        file {
          url
          fileName
        }
        title
      }
      socialMediaLinks {
        title
        href
      }
    }
    allContentfulProject(sort: { order: DESC, fields: createdAt }) {
      edges {
        node {
          client
          slug
          title
          tech
          longDescription {
            longDescription
          }
          poster {
            title
            sizes {
              src
            }
            fluid {
              src
            }
          }
        }
      }
    }
  }
`;

const BodyLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 40px;

  @media (min-width: ${breakpoints.lg}) {
    grid-template-columns: 440px 1fr;
  }
`;

const Intro = styled.div`
  display: grid;
  grid-template-columns: 150px 1fr;
  grid-gap: 20px;
  margin-bottom: 30px;

  @media (min-width: ${breakpoints.sm}) {
    grid-template-columns: 200px 1fr 1fr;
  }
`;

const IntroPic = styled.div`
  position: relative;
  margin-bottom: 20px !important;
  display: inline-table;

  &:before {
    content: "";
    position: absolute;
    top: -4px;
    right: -4px;
    bottom: -4px;
    left: -4px;
    background: linear-gradient(#da1b60, #ff8a00);
  }
`;

const IntroBody = styled.p`
  font-size: 20px;
  margin-bottom: 20px;
`;

const ContactLabel = styled.h2`
  font-size: 20px;
`;

const IntroLinks = styled.ul`
  font-size: 20px;
`;

const ProjectPaneContainer = styled.div`
  position: relative;
`;

const Grid = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;

  @media (min-width: ${breakpoints.sm}) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const Tile = styled.div`
  position: relative;
  z-index: 0;

  &:after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    opacity: 0.1;
    border: 3px solid #7a7acc;
    z-index: 1;
  }

  &:hover {
    filter: brightness(125%);

    .frame {
      opacity: 1;
    }
  }
`;

const TileFrameTopBottom = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  opacity: 0;
  z-index: 2;
  transition: opacity 150ms;

  &:before,
  &:after {
    content: "";
    position: absolute;
    left: 0;
    height: ${settings.frame.thickness};
    width: 100%;
  }

  &:before {
    top: 0;
    background: #da1b60;
  }

  &:after {
    bottom: 0;
    background: #ff8a00;
  }
`;

const BodyLabel = styled.h1`
  font-size: 60px;
  line-height: 1.2;
  display: block;
  color: #da1b60;
  position: relative;
  text-align: left;
  margin-bottom: 30px;
  font-family: ${fonts.fancy};
  font-weight: 900;

  &:before {
    content: "Projects";
    font-size: 60px;
    line-height: 1.2;
    display: block;
    background: linear-gradient(to top, #ff8a00, #da1b60);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    position: absolute;
    top: 0;
    right: 0;
    bottom: -10px;
    left: 0;
    width: 100%;
    z-index: 1;
  }
`;

const TileFrameLeftRight = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  opacity: 0;
  z-index: 2;
  transition: opacity 150ms;

  &:before,
  &:after {
    position: absolute;
    top: ${settings.frame.thickness};
    background: linear-gradient(to bottom, #da1b60, #ff8a00);
    width: ${settings.frame.thickness};
    height: calc(100% - (${settings.frame.thickness} * 2));
  }
  &:before {
    content: "";
    left: 0;
  }
  &:after {
    content: "";
    right: 0;
  }
`;

const Label = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 10px;
  background: linear-gradient(#222736, #201c29);
`;

const LabelTop = styled.div`
  margin-bottom: 5px;
`;

const LabelBottom = styled.div`
  font-style: italic;
  font-weight: 300;
`;
