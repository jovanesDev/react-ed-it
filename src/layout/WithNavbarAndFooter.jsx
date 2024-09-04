/* eslint-disable react/prop-types */
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer";

const WithNavbarAndFooter = (props) => {
  //console.log(props)
  const { children } = props;
  return (
    <div>
      <Navbar logoText="Mi App" />
      {/* Children envuelve Componentes */}
      {children}
      <Footer />
    </div>
  );
};

export default WithNavbarAndFooter;
