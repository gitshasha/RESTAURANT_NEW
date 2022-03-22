import { createContext, useEffect, useState } from "react";
import axios from "axios";
export const PopFoodContext = createContext();
export const PopularProvider = (props) => {
  const [showvendor, setshowvendor] = useState(null);

  return <PopFoodContext.Provider>{props.children}</PopFoodContext.Provider>;
};
