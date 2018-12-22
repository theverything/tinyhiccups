import React from 'react';
import CartContext from "./src/components/cart/context";

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    React.createElement('link', {
      href: 'https://fonts.googleapis.com/css?family=Open+Sans|Playfair+Display',
      rel: 'stylesheet',
      key: 'googleFonts',
    }),
  ]);
};

export const wrapRootElement = ({ element }) => {
  return (
    <CartContext>
      {element}
    </CartContext>
  )
};