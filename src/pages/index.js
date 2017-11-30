import React from 'react';
import Link from 'gatsby-link';
import dateFormat from 'date-fns/format';

const IndexPage = props => (
  <div>
    <h2>Posts</h2>
    <ul className="posts">
      {props.data.allMarkdownRemark.edges.map(({ node }) => (
        <li key={node.id}>
          <h3>
            <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
          </h3>
          <div>{dateFormat(Date.parse(node.frontmatter.date), 'MMM D, YYYY')}</div>
          <p>{node.excerpt}</p>
        </li>
      ))}
    </ul>
  </div>
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
