import React from 'react';
import CartContext from '../cart/context';

export default class Product extends React.Component {
  static contextType = CartContext.Context;

  render() {
    const { product } = this.props;
    const { add } = this.context;

    return (
      <article>
        <h2>{product.name}</h2>
        <div>{product.discription}</div>
        {product.localFiles.map(f => <img src={f.publicURL} alt=""/>)}
        <div>
          <button onClick={() => add(product)}>Add Item</button>
        </div>
      </article>
    );
  }
};

