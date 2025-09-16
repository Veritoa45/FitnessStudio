import { useEffect, useRef, useState } from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuButtonRef = useRef(null);
  const firstLinkRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      firstLinkRef.current?.focus();
    }
  }, [isOpen]);

  return (
    <nav role="navigation" aria-label="principal" className="relative">
      <Icon
        icon="material-symbols:menu-rounded"
        width="32"
        height="32"
        onClick={toggleMenu}
        className="cursor-pointer tag-color"
        aria-label="Abrir menú"
        aria-controls="mobile-drawer"
        aria-expanded={isOpen}
        ref={menuButtonRef}
      />
      <div
        id="mobile-drawer"
        className={`fixed top-0 right-0 h-full w-64 bg-gray-900 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
        role="dialog"
        aria-modal="true"
      >
        <div className="flex justify-end p-4">
          <Icon
            icon="material-symbols:close-rounded"
            width="32"
            height="32"
            className="cursor-pointer tag-color"
            onClick={toggleMenu}
            aria-label="Cerrar menú"
          />
        </div>
        <ul
          className="text-white flex flex-col items-center justify-center space-y-6 mt-10"
          role="menu"
        >
          <li role="none">
            <a
              href="#clases"
              className="text-lg hover:bg-gray-800 p-2 rounded"
              role="menuitem"
              ref={firstLinkRef}
              onClick={() => setIsOpen(false)}
            >
              Nuestras Clases
            </a>
          </li>
          <li role="none">
            <a
              href="#testimonios"
              className="text-lg hover:bg-gray-800 p-2 rounded"
              role="menuitem"
              onClick={() => setIsOpen(false)}
            >
              Testimonios
            </a>
          </li>
          <li role="none">
            <a
              href="#galeria"
              className="text-lg hover:bg-gray-800 p-2 rounded"
              role="menuitem"
              onClick={() => setIsOpen(false)}
            >
              Galeria
            </a>
          </li>
          <li role="none">
            <Link
              to={"/mis-reservas"}
              className="text-lg hover:bg-gray-800 p-2 rounded"
              role="menuitem"
              onClick={() => setIsOpen(false)}
            >
              Mis Reservas
            </Link>
          </li>
          <li role="none">
            <a
              href="#contacto"
              className="text-lg hover:bg-gray-800 p-2 rounded"
              role="menuitem"
              onClick={() => setIsOpen(false)}
            >
              Contacto
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
