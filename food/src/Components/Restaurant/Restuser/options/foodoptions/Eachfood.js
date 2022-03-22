import React from "react";
import "./foodoptionsstyle/eachfood.css";
import { Link, Outlet } from "react-router-dom";
function Eachfood({ fooditem }) {
  return (
    <div className="foodoptioncontainer">
      <Link to={`/rest/food/fooddetails/${fooditem.name}`}>hi</Link>
    </div>
  );
}

export default Eachfood;
