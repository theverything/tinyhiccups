import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

export default function MainLayout({ children }) {
  return (
    <div>
      <Helmet
        title="Gatsby Default Starter"
        meta={[{ name: 'description', content: 'Sample' }, { name: 'keywords', content: 'sample, something' }]}
      />
      <div>{children()}</div>
    </div>
  );
}
