import React from "react";
import CartContext from "./src/components/cart/context";

export const wrapRootElement = ({ element }) => {
  return (
    <CartContext>
      {element}
    </CartContext>
  )
};