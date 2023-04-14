import { collection, getDocs, onSnapshot, query } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { BsFillCaretDownFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { db } from "../FirebaseConfig";
import { selectProduct } from "../Redux/AddProductSlice";
import CameraTypeFilter from "./CameraTypeFilter";
import CctvBrandFilter from "./CctvBrandFilter";
import CctvSetBrand from "./CctvSetBrand";

const CCTVSetFilter = ({ filterData, setFilterData }) => {
  const productUpdateData = useSelector(selectProduct);
  const dispatch = useDispatch();
  const id = useParams();
  console.log(id, "search");

  const [allData, setAllData] = useState(
    productUpdateData?.filter(
      (item) =>
        item.Product_sub_category === id.Product_sub_category &&
        item.Product_category === "cctv"
    )
  );

  const [show, setShow] = useState(false);

  // Price
  const [listOfItems, setListOfItems] = useState([
    { price: "Rs.5000 to Rs.9999", array: [5000, 9999], isChecked: false },
    { price: "Rs.10000 to Rs.19999", array: [10000, 19999], isChecked: false },
  ]);

  // brand
  const [listOfItems_2, setListOfItems_2] = useState([
    { brand: "prama", value: "prama", isChecked: false },
    { brand: "TP LINK", value: "tp link", isChecked: false },
  ]);

  //PRICE
  const handleCheck = (index) => {
    let newCheckData = listOfItems.map((list, currentIndex) =>
      currentIndex === index ? { ...list, isChecked: !list.isChecked } : list
    );

    setListOfItems(newCheckData);
  };

  // cctv brand
  const handleCheck3 = (index) => {
    let newCheckData = listOfItems_2.map((list, currentIndex) =>
      currentIndex === index ? { ...list, isChecked: !list.isChecked } : list
    );
    // console.log(newCheckData, "handlecheck");

    setListOfItems_2(newCheckData);
  };

  const applyFilter = () => {
    let updateList = allData;

    // console.log(updateList, "sub category cctv set");

    let newDataList = listOfItems
      .filter((item) => item.isChecked)
      .map((item) => item);

    let newDataList_1 = listOfItems_2
      .filter((item) => item.isChecked)
      .map((item) => item);

    // console.log(newDataList_1, "newDataList_1");

    if (newDataList.length) {
      updateList = newDataList.flatMap((item) => {
        return updateList.filter((list) => {
          return (
            list.Product_selling_price >= item.array[0] &&
            list.Product_selling_price <= item.array[1]
          );
        });
      });
    }

    if (newDataList_1.length) {
      // console.log(newDataList_1, "newDataList_1");

      updateList = updateList = [
        ...new Set(
          newDataList_1.flatMap((item) => {
            return updateList.filter((list) => {
              console.log(
                list.Product_Brand.toLowerCase(),
                item.value,
                list.Product_category,
                list.Product_Brand.toLowerCase() === item.value &&
                  list.Product_category === "cctv set",
                "kkk"
              );
              return (
                list.Product_Brand.toLowerCase() === item.value &&
                list.Product_category === "cctv set"
              );
            });
          })
        ),
      ];
    }

    setFilterData(updateList);
  };

  useEffect(() => {
    applyFilter();
  }, [listOfItems, listOfItems_2]);

  useEffect(() => {
    // LISTEN (REALTIME)
    const cartItemDocRef = query(collection(db, "products"));
    const unsub = onSnapshot(
      cartItemDocRef,
      (snapShot) => {
        let list = [];
        snapShot.docs.map((doc) => {
          list.push({
            ...doc.data(),
            id: doc.id,
            createdAt: doc.data().createdAt.toDate().toLocaleString(),
          });
        });
        // console.log(list);

        setAllData(
          productUpdateData?.filter(
            (item) =>
              item.Product_sub_category === id.Product_sub_category &&
              item.Product_category === "cctv set"
          )
        );
      },
      (error) => {
        console.log(error);
      }
    );

    return () => {
      unsub();
    };
  }, [id]);

  return (
    <div className="filter__border">
      <h4
        style={{
          display: "flex",
          alignItems: "center",
          columnGap: ".3em",
          paddingBottom: ".7em",
        }}
      >
        FILTERS
      </h4>
      <div className="filter-flex-box">
        <div>
          <h5 style={{ paddingBottom: ".5em" }}>PRICE</h5> {/*  */}
          {listOfItems.map((list, i) => {
            return (
              <div className="form-group form_group--flex" key={i}>
                <input
                  type="checkbox"
                  id={list.price}
                  onChange={() => {
                    handleCheck(i);
                  }}
                />
                <label htmlFor={list.price}>{list.price}</label>
              </div>
            );
          })}
        </div>
        <CctvSetBrand
          setFilterData={setFilterData}
          handleCheck3={handleCheck3}
          listOfItems_2={listOfItems_2}
        />
        {/* 
        <CctvBrandFilter setFilterData={setFilterData} />
        <CameraTypeFilter setFilterData={setFilterData} /> */}
      </div>
    </div>
  );
};

export default CCTVSetFilter;
