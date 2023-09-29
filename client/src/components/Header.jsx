import React from "react";
import { NavLink } from "react-router-dom";
import logo from "./../assets/logo-removebg-preview.png";

const Header = () => {
  return (
    <div className="section header-section">
      <div className="header">
        <NavLink to={"/"}>
          <img src={logo} alt="" className="logo" />
        </NavLink>
        <nav className="links">
          <NavLink to={"/"} className="link">
            Rockets
          </NavLink>
          <NavLink to={"/dragons"} className="link">
            Dragons
          </NavLink>
          <NavLink to={"/missions"} className="link">
            Missions
          </NavLink>
          <NavLink to={"/profile"} className="link">
            My Profile
          </NavLink>
        </nav>
      </div>
    </div>
  );
};

export default Header;
