/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import styled from "@emotion/styled";

import PageContainer from "../components/pageContainer";
import GlobalStyles from "../components/globalStyles";

import Header from "./header";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <GlobalStyles />
      <PageContainer>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div>
          <main>{children}</main>
          <Footer>
            © {new Date().getFullYear()} Steven Lockhorst, Built with
            {` `}
            <a href="https://www.gatsbyjs.org" target="_blank">
              Gatsby
            </a>
          </Footer>
        </div>
      </PageContainer>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

const Footer = styled.footer`
  padding: 10px 0;
  text-align: center;
`;
