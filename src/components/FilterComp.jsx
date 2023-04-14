import React, { useEffect, useState } from "react";
import { Text, Box } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { filterData, getproducts } from "./Redux/app/action";

export const FilterComp = () => {
  const [color, setColor] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [filterData, setFilterData] =  useState([])
  const initialSortBy = searchParams.getAll("sortBy");
  const dispatch = useDispatch();

  const [sortBy, setSortBy] = useState(initialSortBy[0] || "");

  const handleSort = (e) => {
    setSortBy(e.target.value);
  };

  const products = useSelector((state) => state.AppReducer.products);

  // console.log("products", products)

  const handleAsc = () => {
    return products.sort((a, b) => a.price - b.price);
  };

  const handleDesc = () => {
    return products.sort((a, b) => b.price - a.price);
  };

  const handleFilter = (e) => {
    
    const { checked } = e.target;

    if(checked){
      let data = products.filter((item) => item.color === e.target.value);
       dispatch(filterData(data))
      console.log("products", products)
    }
    else{
      dispatch(getproducts())
    }
    // const data = [...filterData]

    // if(data.includes(e.target.value)){
    //    data.splice(data.indexOf(e.target.value))
    // }
    // else{
    //    data.push(e.target.value)
    // }

    // setFilterData(data)


  };

  console.log(products);

  useEffect(() => {
    if (color || sortBy) {
      let params = {};
      color && (params.color = color);
      sortBy && (params.sortBy = sortBy);
      setSearchParams(params);
    }
  }, [color, setSearchParams, sortBy, products]);

  return (
    <Box style={{ textAlign: "left" }}>
      <Box style={{ borderBottom: "0.2rem solid grey" }} mb="1rem">
        <Text fontSize="xl" fontWeight="bold" mb="10px">
          LOCATIONS
        </Text>
        <Box>
          <input
            type="checkbox"
            value="Madhya Pradesh"
            style={{ marginRight: "5px" }}
            onChange={handleFilter}
          />
          <label>Madhya Pradesh</label>
        </Box>
        <Box>
          <input
            type="checkbox"
            value="Karnataka"
            style={{ marginRight: "5px" }}
            onChange={handleFilter}
          />
          <label>Karnataka</label>
        </Box>
        <Box>
          <input
            type="checkbox"
            value="Uttar Pradesh"
            style={{ marginRight: "5px" }}
            onChange={handleFilter}
          />
          <label>Uttar Pradesh</label>
        </Box>
        <Box>
          <input type="checkbox" value="Goa" style={{ marginRight: "5px" }} />
          <label>Goa</label>
        </Box>
        <Box>
          <input
            type="checkbox"
            value="Maharashtra"
            style={{ marginRight: "5px", marginBottom: "1rem" }}
          />
          <label>Maharashtra</label>
        </Box>
      </Box>

      <Text fontSize="xl" fontWeight="bold" mb="10px">
        Color
      </Text>
      <Box style={{ borderBottom: "0.2rem solid grey" }} pb="1rem">
        <Box>
          <input
            type="checkbox"
            value="Blue"
            style={{ marginRight: "5px" }}
            onChange={handleFilter}
          />
          <label>Blue</label>
        </Box>
        <Box>
          <input
            type="checkbox"
            value="Red"
            style={{ marginRight: "5px" }}
            onChange={handleFilter}
          />
          <label>Red</label>
        </Box>
        <Box>
          <input
            type="checkbox"
            value="Black"
            style={{ marginRight: "5px" }}
            onChange={handleFilter}
          />
          <label>Black</label>
        </Box>
        <Box>
          <input
            type="checkbox"
            value="Green"
            style={{ marginRight: "5px" }}
            onChange={handleFilter}
          />
          <label>Green</label>
        </Box>
      </Box>

      <Text fontSize="xl" fontWeight="bold" mb="10px">
        SORT BY
      </Text>
      <Box
        onChange={handleSort}
        style={{ borderBottom: "0.2rem solid grey" }}
        mb="1rem"
      >
        <input
          type="radio"
          value=""
          name="sortBy"
          style={{ marginRight: "5px" }}
        />
        <label>Relevance</label>
        <br />

        <input
          type="radio"
          value="asc"
          name="sortBy"
          onChange={handleAsc}
          style={{ marginRight: "5px" }}
        />
        <label>Low to High</label>
        <br />

        <input
          type="radio"
          value="desc"
          name="sortBy"
          onChange={handleDesc}
          style={{ marginRight: "5px", marginBottom: "1rem" }}
        />
        <label>High to Low</label>
      </Box>
    </Box>
  );
};
