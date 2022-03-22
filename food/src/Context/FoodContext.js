import { createContext, useEffect, useState } from "react";
import axios from "axios";
export const FoodContext = createContext();
export const UserProvider = (props) => {
  const [showfood, setshowfood] = useState(null);
  useEffect(() => {
    axios.get("http://localhost:5000/api/getfood").then((response) => {
      setshowfood(response);
    });
  }, []);
  return (
    <FoodContext.Provider value={[showfood]}>
      {props.children}
    </FoodContext.Provider>
  );
};
