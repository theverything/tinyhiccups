import React from 'react';
import Posts from './posts';

const TagPosts = props => <Posts title={`#${props.pathContext.tag}`} edges={props.data.allMarkdownRemark.edges} />;

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
