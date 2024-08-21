/* eslint-disable react/prop-types */
import "./styles.css";

const NavLink = (props) => {
  const { text } = props;
  return <li>{text}</li>;
};

export default NavLink;
