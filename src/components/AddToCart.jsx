import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Button, Flex } from "@chakra-ui/react";
import { Quantity } from "./Quantity";

export const AddToCart = () => {
  let cartProducts = useSelector((state) => state.AppReducer.cartProducts);

  const handleDelete = (id) => {
    // console.log("id", id)

    return (cartProducts = cartProducts.filter((item) => id !== item.id));
  };

  useEffect(() => {
    console.log(cartProducts);
  }, [cartProducts]);

  console.log("cartProducts", cartProducts);

  return (
    <>
      {cartProducts.map((item) => (
        <Flex style={{ border: "1px solid red" }} key={item.id} gap="10%">
          <img src={item.img} alt="" style={{ width: "200px" }} />
          <h1>{item.productName}</h1>
          <h1>{item.price}</h1>
          <Quantity />
          <button onClick={() => cartProducts.filter((e) => item.id !== e.id)}>
            {" "}
            Delete{" "}
          </button>
        </Flex>
      ))}

      <Button>Place Order </Button>
    </>
  );
};
