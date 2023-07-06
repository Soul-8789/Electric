import React, { useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";


function Navbar() {
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };
  return (
    <nav className="nav">
      <Link to="/" className="nav__brand">
        Electric-App
      </Link>
      <ul className={active}>
      <li className="nav__item">
          <Link to='/landing' >
             Landing Page
          </Link>
        </li>
        <li className="nav__item">
          <Link to='/master' >
            Master File
          </Link>
        </li>
        <li className="nav__item">
        <Link to='/print' >
            Print File
          </Link>
        </li>
        <li className="nav__item">
        <Link to='/payment' >
            Payment File
          </Link>
        </li>
     

      </ul>
      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
     
    </nav>
  );
}

export default Navbar;