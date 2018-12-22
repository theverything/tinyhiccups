const path = require(`path`);

module.exports = ({ graphql, actions }) => {
  const { createPage } = actions;
  return new Promise((resolve, reject) => {
    graphql(`
      query ProductsData {
        allStripeProduct {
          edges {
            node {
              id
              url
            }
          }
        }
      }
    `).then(result => {
      result.data.allStripeProduct.edges.map(({ node }) => {
        createPage({
          path: `/shop/${node.url}/`,
          component: path.resolve(`./src/templates/product.js`),
          context: {
            id: node.id,
          },
        });
      });
      resolve();
    });
  });
};
