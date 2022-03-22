import React, { useEffect } from "react";
import "../Styles/Navbar.css";
function Navbar() {
  function handleScroll() {
    const offset = window.scrollY;
    const navbar = document.querySelector(".navbar");
    console.log(navbar);
    if (offset > 0) {
      navbar.style.position = "fixed";
    } else {
      navbar.style.position = "";
    }
    console.log(offset);
  }
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });
  return (
    <div className="navbar">
      <div className="title">
        <div className="image"></div>
        <h1 className="titlename">McWay</h1>
      </div>
    </div>
  );
}

export default Navbar;
