import React, { useState } from "react";
import { graphql } from "gatsby";
import styled from "@emotion/styled";
import { useMediaQuery } from "react-responsive";

import { breakpoints, settings } from "../constants";
import useModal from "../hooks/useModal";
import Layout from "../components/layout";
import SEO from "../components/seo";
import ProjectPane from "../components/projectPane";
import AspectObject from "../components/aspectObject";
import FancyText from "../components/fancyText";
import Modal from "../components/modal";

const IndexPage = (data) => {
  const { open, openModal, closeModal } = useModal();
  const [selectedProject, setSelectedProject] = useState(
    data.data.allContentfulProject.edges[0].node
  );

  const isTabletOrMobile = useMediaQuery({
    query: `(max-width: ${breakpoints.lg})`,
  });

  function mobileTileAction(data) {
    setSelectedProject(data);
    openModal();
  }

  return (
    <>
      <Layout>
        <SEO title="Home" />
        <Intro>
          <div>
            <IntroPic>
              <AspectObject
                ratioWidth={1}
                ratioHeight={1}
                backgroundColor={"#000"}
              >
                <img src={data.data.contentfulPage.images[0].file.url} alt="" />
              </AspectObject>
            </IntroPic>
          </div>
          <IntroBody>
            {data.data.contentfulPage.body.content[0].content[0].value}
          </IntroBody>

          <ContactSection>
            <ContactTitle>Reach out to me here:</ContactTitle>
            <IntroLinks>
              {data.data.contentfulPage.socialMediaLinks.map((link, index) => {
                return (
                  <li key={index}>
                    <a href={link.href}>{link.title}</a>
                  </li>
                );
              })}
            </IntroLinks>
          </ContactSection>
        </Intro>
        <Body>
          <FancyText content={"Projects"} />

          <BodyLayout>
            {!isTabletOrMobile && (
              <ProjectPaneContainer>
                <ProjectPane data={selectedProject} />
              </ProjectPaneContainer>
            )}

            <Grid>
              {data.data.allContentfulProject.edges.map((edge) => {
                return (
                  <li key={edge.node.title}>
                    {isTabletOrMobile ? (
                      <Tile onClick={() => mobileTileAction(edge.node)}>
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
        </Body>
      </Layout>

      {open && isTabletOrMobile ? (
        <Modal
          close={closeModal}
          render={() => <ProjectPane data={selectedProject} />}
        />
      ) : null}
    </>
  );
};

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

const Body = styled.div``;

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
  grid-template-columns: 1fr;
  grid-gap: 20px;
  margin-bottom: 30px;

  @media (min-width: ${breakpoints.xs}) {
    grid-template-columns: 150px 1fr;
  }

  @media (min-width: ${breakpoints.md}) {
    grid-template-columns: 200px 1fr 1fr;
  }
`;

const IntroPic = styled.div`
  position: relative;
  margin-bottom: 20px !important;

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

const ContactSection = styled.section``;
const ContactTitle = styled.span`
  font-size: 20px;
`;

const IntroLinks = styled.ul`
  font-size: 20px;
  padding-top: 4px;

  li {
    margin-bottom: 4px;
  }
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

export default IndexPage;
