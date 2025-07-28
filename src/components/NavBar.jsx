import { useState } from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relativa">
      <Icon
        icon="material-symbols:menu-rounded"
        width="32"
        height="32"
        onClick={toggleMenu}
        className="cursor-pointer tag-color"
      />
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-gray-900 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="flex justify-end p-4">
          <Icon
            icon="material-symbols:close-rounded"
            width="32"
            height="32"
            className="cursor-pointer tag-color"
            onClick={toggleMenu}
          />
        </div>
        <ul className="text-white flex flex-col items-center justify-center space-y-6 mt-10">
          <Link
            to={"#clases"}
            className="text-lg hover:bg-gray-800 p-2 rounded"
          >
            Nuestras Clases
          </Link>
          <Link
            to={"#testimonios"}
            className="text-lg hover:bg-gray-800 p-2 rounded"
          >
            Testimonios
          </Link>
          <Link
            to={"#galeria"}
            className="text-lg hover:bg-gray-800 p-2 rounded"
          >
            Galeria
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
