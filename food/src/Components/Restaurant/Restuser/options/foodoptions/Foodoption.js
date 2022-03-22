import React, { useState } from "react";
import Eachfood from "./Eachfood";
import { Outlet } from "react-router-dom";
import "./foodoptionsstyle/foodoption.css";
import Addfood from "./Addfood";
function Foodoption() {
  const abara = [
    {
      name: "biryani",
      price: { single: 100, full: 180, jumbo: 300 },
      foodimage:
        "https://media.istockphoto.com/photos/chicken-biryani-picture-id1058029096?b=1&k=20&m=1058029096&s=170667a&w=0&h=jJeEXeopmbH1EVCPtzt617sRV7GqNbydJGNfxaiznfg=",
    },
    {
      name: "yoti",
      price: { single: 100, full: 180, jumbo: 300 },
      foodimage:
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      name: "moti",
      price: { single: 100, full: 180, jumbo: 300 },
      foodimage:
        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    },
    {
      name: "roti",
      price: { single: 100, full: 180, jumbo: 300 },
      foodimage:
        "https://media.istockphoto.com/photos/roti-parata-or-roti-canai-with-lamb-curry-sauce-popular-malaysian-picture-id1296798642?b=1&k=20&m=1296798642&s=170667a&w=0&h=OT2HSrUZyvdajZwVsuZgn9YEWXqFeUX78_ZGpFPawhc=",
    },
  ];
  const [inputList, setInputList] = useState([]);

  function newadd() {
    setInputList(inputList.concat(<Addfood key={inputList.length} />));
  }

  return (
    <div className="fullfoodoptioncont">
      <div className="foodoptioncont">
        <div className="allfoods">
          {abara &&
            abara.map((data, index) => (
              <Eachfood key={index} fooditem={data} />
            ))}
        </div>
        <div className="addnew">
          {" "}
          {inputList}
          <button onClick={newadd}>ADDas</button>
        </div>
      </div>
      <div className="fooddetoutlet">
        {" "}
        <Outlet />
      </div>
    </div>
  );
}

export default Foodoption;
