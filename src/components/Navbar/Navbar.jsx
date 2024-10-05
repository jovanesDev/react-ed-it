/* eslint-disable react/prop-types */
// import React from 'react'
import { useNavigate } from "react-router-dom";

import NavItem from "./NavItem/NavItem";
import TextComponent from "../../shared/TextComponent/TextComponent";
import { navlinks } from "../../constants/navbar";

import { IoIosSunny, IoMdMoon } from "react-icons/io";

import "./navbar.css";
import { useDispatch, useSelector } from "react-redux";
import { changeToDarkMode, changeToLightMode } from "../../features/appmode/appModeReducer";
const Navbar = (props) => {
  const { logoText } = props;
  const { darkMode } = useSelector((store) => store.appmode);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // COMO SACAR LOS QUERYS de la URL
  // console.log(window.location,'window.location')
  // const urlData = new URLSearchParams(window.location.search)
  // console.log(urlData,'url data')
  // const params = Object.fromEntries(urlData.entries());
  // console.log(params,'params')

  return (
    <div className="nav_container">
      <div
        style={{
          display: "flex",
          width: "200px",
          gap: "30px",
          margin: "20px 0px",
        }}
      >
        <button style={{ fontSize: "20px" }} onClick={() => navigate(-1)}>
          ←
        </button>
        <button style={{ fontSize: "20px" }} onClick={() => navigate(+1)}>
          →
        </button>
      </div>
      <nav className={darkMode ? 'dark' : 'light'}>
        <TextComponent text={logoText} variant="56" />
        <ul>
          {navlinks.map((route, index) => {
            return <NavItem key={index} route={route} darkMode={darkMode} />;
          })}
        </ul>
        <div style={{ margin: "0 40px", display: "flex", gap: "20px" }}>
          {darkMode ? (
            <IoIosSunny onClick={() => dispatch(changeToDarkMode()) } fontSize={"30px"} cursor={"pointer"} />
          ) : (
            <IoMdMoon onClick={() => dispatch(changeToLightMode()) } fontSize={"28px"} cursor={"pointer"} />
          )}
        </div>
        {/* MALA PRACTICA  */}
        {/* <a href="/">Home</a> */}
      </nav>
    </div>
  );
};

export default Navbar;
