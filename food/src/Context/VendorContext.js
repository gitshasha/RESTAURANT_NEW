import { createContext, useEffect, useState } from "react";
import axios from "axios";
export const VendorContext = createContext();
export const UserProvider = (props) => {
  const [showvendor, setshowvendor] = useState(null);
  const vendorfood = [
    {
      name: "biryani",
      price: { single: 110, full: 220, jumbo: 350 },
      foodimage:
        "https://media.istockphoto.com/photos/chicken-biryani-picture-id1058029096?b=1&k=20&m=1058029096&s=170667a&w=0&h=jJeEXeopmbH1EVCPtzt617sRV7GqNbydJGNfxaiznfg=",
    },
    {
      name: "yoti",
      price: { single: 100, full: 190, jumbo: 400 },
      foodimage:
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      name: "moti",
      price: { single: 80, full: 280, jumbo: 390 },
      foodimage:
        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    },
    {
      name: "roti",
      price: { single: 60, full: 130, jumbo: 290 },
      foodimage:
        "https://media.istockphoto.com/photos/roti-parata-or-roti-canai-with-lamb-curry-sauce-popular-malaysian-picture-id1296798642?b=1&k=20&m=1296798642&s=170667a&w=0&h=OT2HSrUZyvdajZwVsuZgn9YEWXqFeUX78_ZGpFPawhc=",
    },
  ];

  return (
    <VendorContext.Provider
      value={{
        showvendor: [showvendor, setshowvendor],
        vendorfood: vendorfood,
      }}
    >
      {props.children}
    </VendorContext.Provider>
  );
};
