import React from 'react';
import { graphql } from 'gatsby';
import Posts from '../components/posts';
import Layout from '../components/layout';

const IndexPage = props => (
  <Layout>
    <Posts title="Posts" edges={props.data.allMarkdownRemark.edges} />
  </Layout>
);

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
            date
          }
          id
        }
      }
    }
  }
`;

export default IndexPage;
