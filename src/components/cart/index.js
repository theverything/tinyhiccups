import React from 'react';
import CartContext from './context'

export default class Cart extends React.Component {
  static contextType = CartContext.Context;

  render() {
    const { items } = this.context;
    
    return (
      <div>
        Items ({Object.keys(items).length})
      </div>
    );
  }
}