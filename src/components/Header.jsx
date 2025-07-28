import NavBar from "./NavBar";
import Logo from "../assets/Logo.png";

const Header = () => {
  return (
    <div className="bg-gray-900 flex justify-between items-center p-4">
      <img src={Logo} alt="Logo" className="w-3xs" />
      <NavBar />
    </div>
  );
};

export default Header;
