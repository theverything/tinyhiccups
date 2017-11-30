import React from 'react';
import Link from 'gatsby-link';

function PrevNext({ previous, next }) {
  return (
    <div className="prev-next-links">
      {previous && (
        <div className="prev-link">
          Previous Post // <Link to={previous.fields.slug}>{previous.frontmatter.title}</Link>
        </div>
      )}
      {next && (
        <div className="next-link">
          Next Post // <Link to={next.fields.slug}>{next.frontmatter.title}</Link>
        </div>
      )}
    </div>
  );
}

export default ({ data, pathContext }) => {
  const { previous, next } = pathContext;
  const post = data.markdownRemark;
  return (
    <div>
      <h2>{post.frontmatter.title}</h2>
      <div>Posted - {post.frontmatter.date}</div>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
      <PrevNext previous={previous} next={next} />
    </div>
  );
};

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
      }
    }
  }
`;
