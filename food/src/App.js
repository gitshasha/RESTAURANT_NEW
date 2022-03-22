import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Login from "./Components/Login";
import { UserProvider } from "./Context/VendorContext";
import { FoodProvider } from "./Context/FoodContext";
import UserHome from "./Components/User/UserHome";
import Navbar from "./Components/Navbar";
import Foodoption from "./Components/Restaurant/Restuser/options/foodoptions/Foodoption";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Restuser from "./Components/Restaurant/Restuser/Restuser";
import VendorHome from "./Components/Restaurant/VendorHome";
import Profileoption from "./Components/Restaurant/Restuser/options/Profileoption";
import Orderoption from "./Components/Restaurant/Restuser/options/Orderoption";
import Fooddetails from "./Components/Restaurant/Restuser/options/foodoptions/Fooddetails";
import { RestlistProvider } from "./Context/RestdetContext";
function App() {
  // const [showfood, setshowfood] = useState(null);
  // useEffect(() => {
  //   axios.get("http://localhost:5000/api/getfood").then((response) => {
  //     setshowfood(response.data);
  //     console.log(response.data);
  //   });
  // }, []);

  return (
    <div className="App">
      <Navbar />
      <UserProvider>
        <RestlistProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/User" element={<UserHome />} />
              <Route path="/rest" element={<Restuser />}>
                <Route path="food" element={<Foodoption />}>
                  <Route path="fooddetails/:name" element={<Fooddetails />} />
                </Route>
                <Route path="order" element={<Orderoption />} />
                <Route path="profile" element={<Profileoption />} />
              </Route>
              <Route path="/Restaurant" element={<VendorHome />} />
            </Routes>
          </BrowserRouter>
        </RestlistProvider>
      </UserProvider>
    </div>
  );
}
export default App;
