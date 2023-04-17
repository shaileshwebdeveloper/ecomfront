import React, { useState } from "react";

export const Quantity = ({ quantity, setQuantity }) => {
  return (
    <div>
      <button
        onClick={() => setQuantity(quantity - 1)}
        disabled={quantity === 1}
      >
        -
      </button>
      {quantity}
      <button onClick={() => setQuantity(quantity + 1)}>+</button>
    </div>
  );
};
