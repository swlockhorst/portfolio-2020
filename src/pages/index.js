import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

export const query = graphql`
  {
    allContentfulProject(sort: { order: DESC, fields: createdAt }) {
      edges {
        node {
          client
          slug
          title
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
    allContentfulBio {
      edges {
        node {
          socialMediaLinks {
            icon {
              file {
                url
                fileName
              }
            }
          }
          intro {
            intro
          }
        }
      }
    }
  }
`

const IndexPage = data => {
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <div>
        {data.data.allContentfulProject.edges.map(edge => {
          return (
            <li key={edge.node.title}>
              <Link to={`/${edge.node.slug}/`}>
                {edge.node.title}
                <br />
                {edge.node.client}
              </Link>
            </li>
          )
        })}
      </div>
    </Layout>
  )
}

export default IndexPage
