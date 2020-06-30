import React from "react"
import { graphql } from "gatsby"

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
`

const DetailPage = data => {
  return (
    <div>
      <div>Test:</div>
      <div>{console.log(">>>", data)}</div>
      <p>{data.data.contentfulProject.longDescription.longDescription}</p>
    </div>
  )
}

export default DetailPage
