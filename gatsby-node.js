const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators;

  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` });

    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });
  }
};

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;
  return new Promise((resolve, reject) => {
    graphql(`
      query PostData {
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
          edges {
            previous {
              ...postData
            }
            node {
              ...postData
            }
            next {
              ...postData
            }
          }
        }
      }

      fragment postData on MarkdownRemark {
        fields {
          slug
        }
        frontmatter {
          title
        }
      }
    `).then(result => {
      result.data.allMarkdownRemark.edges.map(({ previous, node, next }) => {
        createPage({
          path: node.fields.slug,
          component: path.resolve(`./src/templates/post.js`),
          context: {
            // Data passed to context is available in page queries as GraphQL variables and as props.
            slug: node.fields.slug,
            previous,
            next,
          },
        });
      });
      resolve();
    });
  });
};
