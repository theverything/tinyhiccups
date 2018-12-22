import React from 'react';
import { graphql } from 'gatsby';
import Posts from '../components/posts';
import Layout from '../components/layout';

const TagPosts = props => (
  <Layout>
    <Posts
      title={`#${props.pageContext.tag}`}
      edges={props.data.allMarkdownRemark.edges}
    />
  </Layout>
);

export const query = graphql`
  query TagIndexQuery($tag: String!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
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

export default TagPosts;
