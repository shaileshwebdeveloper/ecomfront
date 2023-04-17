import { Button, Flex } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

export const Wishlist = () => {

   const wishlist =  useSelector((state) => state.AppReducer.wishlist)

   console.log("wishlist", wishlist)



  return    <>
  { wishlist.map((item) => (
    <Flex style={{ border: "1px solid red" }} key={item.id} gap="10%">
      <img src={item.img} alt="" style={{ width: "200px" }} />
      <h1>{item.productName}</h1>
      <h1>{item.price}</h1>
      {/* <Quantity quantity={quantity} setQuantity={setQuantity} /> */}
      <Button
        colorScheme="teal"
        variant='outline'
        size="sm"
        // onClick={() => handleDelete(item.id)}
      >
        Delete
      </Button>

      <Button>
         Add To Cart
      </Button>
    </Flex>

  ))}
  
</>
};
