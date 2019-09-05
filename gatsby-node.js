const path = require("path")
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `Mdx`) {
    const slug = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value: `/content${slug}`,
    })
  }
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allMdx {
        edges {
          node {
            id
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
            external
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panic('🚨  ERROR: Loading "createPages" query', result.errors)
  }

  const posts = result.data.allMdx.edges
  const projects = result.data.allProjectsJson.edges

  posts.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/article.js`),
      context: {
        id: node.id,
      },
    })
  })

  projects.forEach(({ node }) => {
    if (node.external.length === 0) {
      createPage({
        path: `/projects/${node.id}`,
        component: path.resolve(`./src/templates/project.js`),
        context: {
          id: node.id,
        },
      })
    }
  })
}
