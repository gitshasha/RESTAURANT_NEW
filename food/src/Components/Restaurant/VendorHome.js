import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function VendorHome() {
  const [vendorname, setvendorname] = useState("");
  const [vendorpass, setvendorpass] = useState("");
  const [login, setlogin] = useState(0);
  const navigate = useNavigate();
  function setvenname(e) {
    setvendorname(e.target.value);
  }
  function setvenpass(e) {
    setvendorpass(e.target.value);
  }
  function postlogin() {
    console.log(login);
    if (login === 1) {
      axios
        .post("http://localhost:5000/login", {
          username: vendorname,
          password: vendorpass,
        })
        .then((res) => {
          if (res.data.status === "error") {
            alert("username existss");
          } else {
            navigate("/rest");
          }
        });
    } else {
      axios
        .post("http://localhost:5000/register", {
          username: vendorname,
          password: vendorpass,
        })
        .then((res) => {
          if (res.data.status === "error") {
            alert("username existss");
          } else {
            navigate("/rest");
          }
        });
    }
  }
  return (
    <div>
      <button
        onClick={() => {
          setlogin(0);
        }}
      >
        Register
      </button>
      <button
        onClick={() => {
          setlogin(1);
        }}
      >
        Login
      </button>
      <input
        type="text"
        placeholder="name"
        onChange={setvenname}
        value={vendorname}
      />
      <input
        type="password"
        placeholder="name"
        onChange={setvenpass}
        value={vendorpass}
      />
      <button onClick={postlogin}>submit</button>
    </div>
  );
}

export default VendorHome;
