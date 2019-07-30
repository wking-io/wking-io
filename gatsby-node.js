const path = require("path")
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `Mdx`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
      allMdx {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
      allProjectsJson {
        edges {
          node {
            id
          }
        }
      }
    }
  `).then(result => {
    result.data.allMdx.edges.forEach(({ node }) => {
      createPage({
        path: node.fields.slug,
        component: path.resolve(`./src/templates/article.js`),
        context: {
          slug: node.fields.slug,
        },
      })
    })
    result.data.allProjectsJson.edges.forEach(({ node }) => {
      createPage({
        path: `/projects/${node.id}`,
        component: path.resolve(`./src/templates/project.js`),
        context: {
          id: node.id,
        },
      })
    })
  })
}
