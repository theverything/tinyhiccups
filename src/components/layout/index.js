import React from 'react';
import { Link } from 'gatsby';
import Helmet from 'react-helmet';

import 'normalize.css';
import './index.css';

export default function MainLayout({ children }) {
  const copyrightYear = new Date().getFullYear();

  return (
    <div className="container">
      <Helmet
        title="Tiny Hiccups"
        meta={[
          { name: 'description', content: 'Sample' },
          { name: 'keywords', content: 'sample, something' },
        ]}
      />
      <header>
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
      </header>
      <main>{children}</main>
      <footer>
        <small>
          &copy; Copyright {copyrightYear} Kat Park, all rights reserved.
        </small>
      </footer>
    </div>
  );
}
