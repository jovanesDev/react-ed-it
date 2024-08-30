/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import "./styles.css";

//NavLink
//Link
// hook: navigate

const NavItem = ({ route }) => {
  const { text, path } = route;
  return (
    <NavLink
      className={({ isActive }) => (isActive ? "nav_item active" : "nav_item")}
      to={path}
    >
      {text}
    </NavLink>
  );
};

export default NavItem;
