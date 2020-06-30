const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const response = await graphql(`
    query {
      allContentfulProject(sort: { fields: createdAt, order: ASC }) {
        edges {
          node {
            title
            slug
            client
            tech
          }
        }
      }
    }
  `)
  response.data.allContentfulProject.edges.forEach(edge => {
    createPage({
      path: `/${edge.node.slug}`,
      component: path.resolve("./src/templates/detailPage.js"),
      context: {
        slug: edge.node.slug,
      },
    })
  })
}
