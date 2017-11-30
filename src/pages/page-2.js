import React from 'react';
import Link from 'gatsby-link';

const SecondPage = props =>
  console.log(props.data) || (
    <div>
      <p>Welcome to page 2</p>
      <p>{props.data.site.siteMetadata.foo}</p>
      <Link to="/">Go back to the homepage</Link>
    </div>
  );

export const query = graphql`
  query SecondPageQuery {
    site {
      siteMetadata {
        foo
      }
    }
  }
`;

export default SecondPage;
