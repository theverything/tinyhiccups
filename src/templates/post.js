import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import Post from '../components/post';

export default ({ data, pageContext }) => {
  const { previous, next } = pageContext;
  const post = data.markdownRemark;
  
  return (
    <Layout>
      <Post post={post} previous={previous} next={next} />
    </Layout>
  );
};

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
        tags
      }
    }
  }
`;
