import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../../components/layout';

export default function AboutPage(props) {
  return (
    <Layout>
      <div>
        <h2>Shop</h2>
        {props.data.allStripeProduct.edges.map(e => <Link to={`/shop/${e.node.url}`}>Home</Link>)}
      </div>
    </Layout>
  );
}

export const query = graphql`
  query ProductsData {
    allStripeProduct {
      edges {
        node {
          url
        }
      }
    }
  }
`;

