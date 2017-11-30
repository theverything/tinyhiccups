const path = require(`path`);

module.exports = ({ graphql, boundActionCreators }) => {
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
