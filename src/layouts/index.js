import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import 'normalize.css';
import './index.css';

export default function MainLayout({ children }) {
  return (
    <div>
      <Helmet
        title="Gatsby Default Starter"
        meta={[{ name: 'description', content: 'Sample' }, { name: 'keywords', content: 'sample, something' }]}
      />

      <main>
        <h1>Tiny Hiccups</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about/">About</Link>
            </li>
          </ul>
        </nav>
        {children()}
      </main>
    </div>
  );
}
