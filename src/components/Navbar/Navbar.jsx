/* eslint-disable react/prop-types */
// import React from 'react'
import { navlinks } from "../../constants/navbar";
import TextComponent from "../../shared/TextComponent/TextComponent";
import NavLink from "./NavLink/NavLink";
import "./navbar.css";

const Navbar = (props) => {
  const { logoText } = props;
  return (
    <div className="nav_container">
      <nav>
        <TextComponent text={logoText} variant="56" />
        <ul>
          { navlinks.map((navText, index) => {
            return <NavLink key={index} text={navText} />;
          }) }
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
