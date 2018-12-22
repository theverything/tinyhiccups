import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import Product from '../components/product';

export default class ProductPage extends React.Component {
  render() {
    const { data } = this.props;
    const product = data.stripeProduct;
    return (
      <Layout>
        <Product product={product} />
      </Layout>
    );
  }
};

export const query = graphql`
  query ProductQuery($id: String!) {
    stripeProduct(id: { eq: $id }) {
      id
      name
      caption
      description
      url
      localFiles {
        publicURL
      }
    }
  }
`;
