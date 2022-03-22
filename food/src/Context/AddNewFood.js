import { createContext, useEffect, useState } from "react";
import axios from "axios";
export const AddNewFoodContext = createContext();
export const UserProvider = (props) => {
  const [addnewfood, setaddnewfood] = useState(0);
  return (
    <AddNewFoodContext.Provider value={[addnewfood]}>
      {props.children}
    </AddNewFoodContext.Provider>
  );
};