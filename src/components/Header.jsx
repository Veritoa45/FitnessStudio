import NavBar from "./NavBar";
import Logo from "../assets/Logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-between items-center p-4 h-[120px]">
      <Link to={"/"}>
        <img src={Logo} alt="Logo" className="w-3xs" />
      </Link>
      <NavBar />
    </div>
  );
};

export default Header;
