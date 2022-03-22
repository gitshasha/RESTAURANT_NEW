import { createContext, useEffect, useState } from "react";
import axios from "axios";
export const RestdetContext = createContext();
export const RestlistProvider = (props) => {
  const Restdetails = [
    { name: "star", rating: 4.5, profilepic: "", userId: 1234 },
    { name: "saitama", rating: 4.9, profilepic: "", userId: 1235 },
    { name: "sitara", rating: 4.0, profilepic: "", userId: 1236 },
    { name: "tarara", rating: 3.8, profilepic: "", userId: 1237 },
  ];
  return <RestdetContext.Provider>{props.children}</RestdetContext.Provider>;
};
