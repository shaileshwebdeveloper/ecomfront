import axios from "axios";
import styles from "./Products.module.css";
import { useEffect, useState } from "react";
import { Flex, SimpleGrid } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, getproducts, wishlistCart } from "./Redux/app/action";
import { useSearchParams } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Products = () => {


  const [searchParams] = useSearchParams();
  const products = useSelector((state) => state.AppReducer.products);
  const cartProducts = useSelector((state) => state.AppReducer.cartProducts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getproducts());
  }, []);

  console.log("products", products);
  // console.log("addToCart", cartProducts)

  return (
    <>
         <SimpleGrid columns={4} spacing={10} mt="2%">
        {products?.map((item) => (
          <div className={styles.card} key={item.id}>
            <img src={item.img} alt="Denim Jeans" style={{ width: "80%" }} />
            <h1>{item.productName}</h1>
            <p className={styles.price}>₹ {item.price}</p>
            <p>{item.desc}</p>

              <Flex>
               <button style={{background : "red"}} onClick={() => dispatch(wishlistCart(item))}>
                  Wishlist
               </button>
              <button onClick={() => dispatch(addToCart(item))}>
                Add to Cart
              </button>
              </Flex>

          </div>
        ))}
      </SimpleGrid>
    </>
  );
};
