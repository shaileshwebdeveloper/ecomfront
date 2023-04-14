import React from "react";
import { Products } from "./Products";
import { Box, Flex } from "@chakra-ui/react";
import { FilterComp } from "./FilterComp";

export const Home = () => {
  return (
    <Flex>
      <Box w="20%" pl="2%">
        <FilterComp />
      </Box>

      <Products />
    </Flex>
  );
};
