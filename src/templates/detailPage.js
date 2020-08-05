import React from "react";
import { graphql } from "gatsby";
import styled from "@emotion/styled";

import { breakpoints } from "../constants";
import SEO from "../components/seo";
import Layout from "../components/layout";
import AspectObject from "../components/aspectObject";

const DetailPage = (data) => {
  return (
    <>
      <Layout>
        <SEO title={data.data.contentfulProject.title} />

        <Heading></Heading>
        <DetailLayout>
          <Tech>
            <h1>Tech:</h1>
            <ul>
              {data.data.contentfulProject.tech.map((tech, index) => {
                return <li key={index}>{tech}</li>;
              })}

              {console.log(">>", data.data.contentfulProject)}
              <li></li>
            </ul>
          </Tech>
          <div>
            <h1>Project Summary:</h1>
            {data.data.contentfulProject.longDescription.longDescription}

            <a href={"#"}>Check it out here!</a>
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

const Heading = styled.div`
  background: linear-gradient(#222736, #201c29);
  height: 180px;
  margin-bottom: 20px;
`;

const DetailLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 40px;

  @media (min-width: ${breakpoints.md}) {
    grid-template-columns: 240px 2fr;
  }
`;

const Tech = styled.div``;
