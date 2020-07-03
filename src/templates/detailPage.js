import React from "react";
import { graphql } from "gatsby";

import SEO from "../components/seo";
import Layout from "../components/layout";

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

const DetailPage = (data) => {
  return (
    <>
      <Layout>
        <SEO title={data.data.contentfulProject.title} />
        <div>
          <p>{data.data.contentfulProject.longDescription.longDescription}</p>
        </div>
      </Layout>
    </>
  );
};

export default DetailPage;
