/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import "./styles.css";

//NavLink
//Link
// hook: navigate

const NavItem = ({ route }) => {
  const { text, path,darkMode } = route;
  return (
    <NavLink
      //className={darkMode ? 'darkMode' : 'lightMode'}
      to={path}
    >
      {text}
    </NavLink>
  );
};

export default NavItem;
