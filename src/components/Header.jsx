import NavBar from "./NavBar";
import Logo from "../assets/Logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center p-4 h-[120px] bg-transparent">
      <Link to={"/"}>
        <img src={Logo} alt="Logo" className="w-3xs" />
      </Link>
      <NavBar />
    </div>
  );
};

export default Header;
