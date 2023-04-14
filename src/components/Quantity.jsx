import React, { useState } from "react";

export const Quantity = () => {
  const [quantity, setQuantity] = useState(0);

  return (
    <div>
      <button
        onClick={() => setQuantity(quantity - 1)}
        disabled={quantity === 0}
      >
        -
      </button>
      {quantity}
      <button onClick={() => setQuantity(quantity + 1)}>+</button>
    </div>
  );
};
