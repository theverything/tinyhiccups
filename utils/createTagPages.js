const path = require(`path`);

module.exports = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    graphql(`
      query TagsQuery {
        allMarkdownRemark {
          distinct(field: frontmatter___tags)
        }
      }
    `).then(result => {
      result.data.allMarkdownRemark.distinct.map(tag => {
        createPage({
          path: `/tag/${tag}/`,
          component: path.resolve(`./src/templates/tagPosts.js`),
          context: {
            tag,
          },
        });
      });
      resolve();
    });
  });
};
