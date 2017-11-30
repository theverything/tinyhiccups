const { createFilePath } = require(`gatsby-source-filesystem`);

const createPosts = require('./utils/createPosts');
const createTagPages = require('./utils/createTagPages');

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

exports.createPages = opts => {
  return Promise.all([createPosts(opts), createTagPages(opts)]);
};
