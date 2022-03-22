import React from "react";

import { useContext, useState } from "react";

import { FoodContext } from "../../Context/FoodContext";
function FoodDetails() {
  const showfood = useContext(FoodContext);
  console.log(showfood);
  return <div>{showfood && showfood.map((food, index) => <div></div>)}</div>;
}

export default FoodDetails;
