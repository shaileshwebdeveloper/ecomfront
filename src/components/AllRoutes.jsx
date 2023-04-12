import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { AddToCart } from "./AddToCart";
import { Signup } from "./Signup";
import { Signin } from "./Signin";
import { Profile } from "./Profile";
import { Wishlist } from "./Wishlist";
import PrivateRoute from "./PrivateRoute";
import {PaymentSuccess} from "./PaymentSuccess"
import {PaymentFailure} from "./PaymentFailure"
import {Payumoney} from "./Payumoney"

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={ <Home />}></Route>
      <Route path="/addtocart" element={<PrivateRoute><AddToCart /></PrivateRoute>}></Route>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/signin" element={<Signin />}></Route>
      <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>}></Route>
      <Route path="/wishlist" element={<PrivateRoute><Wishlist /></PrivateRoute>}></Route>
      <Route path="/addtocart" element={<PrivateRoute><AddToCart /></PrivateRoute>}></Route>
      <Route path="/payumoney" element={<Payumoney />}></Route>
      <Route path="/paymentsuccess" element={<PaymentSuccess />}></Route>
      <Route path="/paymentfailure" element={<PaymentFailure />}></Route>

    </Routes>
  );
};
