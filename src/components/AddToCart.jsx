import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Flex } from "@chakra-ui/react";
import { Quantity } from "./Quantity";
import { addToCart, updateCart } from "./Redux/app/action";

export const AddToCart = () => {

  const dispatch = useDispatch()
  const [total, setTotal] =  useState(0)
   let cartProducts = useSelector((state) => state.AppReducer.cartProducts);

  const handleDelete = (id) => {
   
   let data = cartProducts.filter((item) => id !== item.id)

   console.log("data", data)

    dispatch(updateCart(data))
    
  };

  useEffect(() => {
    console.log(cartProducts);
  }, [cartProducts]);

  // console.log("cartProducts", cartProducts);

  return (
    <>
      {cartProducts.map((item) => (
        <Flex style={{ border: "1px solid red" }} key={item.id} gap="10%">
          <img src={item.img} alt="" style={{ width: "200px" }} />
          <h1>{item.productName}</h1>
          <h1>{item.price}</h1>
          <Quantity />
          <Button colorScheme='teal' size='sm' onClick={() => handleDelete(item.id)}>     
            Delete
          </Button>
        </Flex>
      ))}

      <Button>Place Order </Button>
    </>
  );
};
