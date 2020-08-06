import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
// import GlobalStyles from "../components/globalStyles";

const NotFoundPage = () => {
  return (
    <>
      <Layout>
        <SEO title="404: Not found" />
        <h1>{"¯_(ツ)_/¯"}</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </Layout>
    </>
  );
};

export default NotFoundPage;
