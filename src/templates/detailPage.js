import React from "react";
import { graphql } from "gatsby";
import styled from "@emotion/styled";

import { breakpoints } from "../constants";
import SEO from "../components/seo";
import Layout from "../components/layout";
import AspectObject from "../components/aspectObject";
import FancyText from "../components/fancyText";

const DetailPage = (data) => {
  return (
    <>
      <Layout>
        <SEO title={data.data.contentfulProject.title} />

        {/* <Heading backgroundSrc={data.data.contentfulProject.poster.sizes.src} /> */}

        <DetailLayout>
          <Tech>
            <FancyText content={"Tech"} />
            <ul>
              {data.data.contentfulProject.tech.map((tech, index) => {
                return <li key={index}>{tech}</li>;
              })}
            </ul>
          </Tech>

          <div>
            <FancyText content={"Project Summary"} />
            <Poster>
              <AspectObject
                ratioWidth={8}
                ratioHeight={6}
                backgroundColor={"#000"}
              >
                <img
                  src={data.data.contentfulProject.poster.sizes.src}
                  alt={data.data.contentfulProject.poster.sizes.title}
                />
              </AspectObject>
            </Poster>
            <div>
              {data.data.contentfulProject.longDescription.longDescription}
            </div>
          </div>
        </DetailLayout>
      </Layout>
    </>
  );
};

export default DetailPage;

export const query = graphql`
  query($slug: String!) {
    contentfulProject(slug: { eq: $slug }) {
      title
      client
      tech
      slug
      longDescription {
        longDescription
      }
      poster {
        title
        sizes {
          src
        }
      }
    }
  }
`;

// const Heading = styled.div`
//   background: url(${(props) => props.backgroundSrc});
//   background-size: cover;
//   height: 180px;
//   margin-bottom: 20px;
// `;

// const Intro = styled.div`
//   display: grid;
//   grid-template-columns: 1fr;
//   grid-gap: 20px;
//   margin-bottom: 30px;

//   @media (min-width: ${breakpoints.xs}) {
//     grid-template-columns: 150px 1fr;
//   }

//   @media (min-width: ${breakpoints.md}) {
//     grid-template-columns: 200px 1fr 1fr;
//   }
// `;

const Poster = styled.div`
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

// const IntroBody = styled.p`
//   font-size: 20px;
//   margin-bottom: 20px;
// `;

const DetailLayout = styled.div`
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

const Tech = styled.div``;
