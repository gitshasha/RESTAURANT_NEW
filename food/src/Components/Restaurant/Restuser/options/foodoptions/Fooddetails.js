import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { VendorContext } from "../../../../../Context/VendorContext";
import "./foodoptionsstyle/fooddetail.css";
function Fooddetails() {
  const { name } = useParams();
  const { showfood, vendorfood } = useContext(VendorContext);
  const foodie = vendorfood;
  const [fooddetail, setfooddetail] = useState({});
  useEffect(() => {
    foodie.map((data, index) => {
      if (name === data.name) {
        setfooddetail(data);
      }
    });
  }, [name]);

  return (
    <div className="fooddetailscont">
      {fooddetail && (
        <div className="foodimage">
          <img src={fooddetail.foodimage} alt="" />
        </div>
      )}
      {name}
      <div>
        {fooddetail.price ? (
          Object.keys(fooddetail.price).map((data, index) => (
            <div key={index}>
              {data}:{fooddetail.price[data]}
            </div>
          ))
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default Fooddetails;
