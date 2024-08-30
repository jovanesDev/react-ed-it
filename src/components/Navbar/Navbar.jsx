/* eslint-disable react/prop-types */
// import React from 'react'
import { useLocation, useNavigate } from "react-router-dom";
import { navlinks } from "../../constants/navbar";
import TextComponent from "../../shared/TextComponent/TextComponent";
import NavItem from "./NavItem/NavItem";
import "./navbar.css";
const Navbar = (props) => {
  const { logoText } = props;
  
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location)

  return (
    <div className="nav_container">
      <div style={{display:'flex', width:"200px", gap:"30px", margin:"20px 0px"}}>
        <button style={{fontSize:"20px"}} onClick={() => navigate(-1) }>←</button>
        <button style={{fontSize:"20px"}} onClick={() => navigate(+1)}>→</button>
      </div>
      <nav>
        <TextComponent text={logoText} variant="56" />
        <ul>
          {navlinks.map((route, index) => {
            return <NavItem key={index} route={route} />;
          })}
        </ul>
        {/* MALA PRACTICA  */}
        {/* <a href="/">Home</a> */}
      </nav>
    </div>
  );
};

export default Navbar;
