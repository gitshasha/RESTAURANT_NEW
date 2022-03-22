import React, { useState, useEffect, useContext } from "react";
import axios from "axios";

import { Link, Outlet } from "react-router-dom";
import "../../../Styles/Vendor/Restaurantuser.css";
import { VendorContext } from "../../../Context/VendorContext";
function Restuser() {
  // const [inputList, setInputList] = useState([]);

  // function newadd() {
  //   setInputList(inputList.concat(<Addfood key={inputList.length} />));
  // }
  const { showvendor } = useContext(VendorContext);
  const [fooddetail, setfooddetail] = showvendor;

  return (
    <div className="restaurantcontainer">
      {/* <button onClick={newadd}>ADDas</button>
      {inputList} */}

      <div className="sidenavigation">
        <div className="foodoptions opt">
          {" "}
          <Link to="/rest/food">Food</Link>
        </div>
        <div className="orderoptions opt">
          <Link to="/rest/order">order</Link>
        </div>
        <div className="profileoptions opt">
          <Link to="/rest/profile">profile</Link>
        </div>
      </div>
      <div className="optionoutlet">
        <Outlet />
      </div>
    </div>
  );
}

export default Restuser;
