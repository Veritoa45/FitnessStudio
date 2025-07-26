import Logo from "../assets/Logo.png";

const NavBar = () => {
  return (
    <>
      <div className="bg-black flex justify-between items-center p-4">
        <img src={Logo} alt="Logo" className="w-3xs" />
        <button id="abrir">
          <img src="img/menu.png" alt="Abrir" className="w-3xs" />
        </button>
        <nav className="nav" id="nav">
          <button id="cerrar">
            <img src="img/cerrar.png" alt="Cerrar" className="cerrar" />
          </button>
          <ul className="text-white">
            <li>
              <a href="#clases">Nuestras Clases</a>
            </li>
            <li>
              <a href="#testimonios">Testimonios</a>
            </li>
            <li>
              <a href="#galeria">Galeria</a>
            </li>
          </ul>
        </nav>
      </div>
      <div id="openModalBtn">Reserva tu lugar</div>
    </>
  );
};

export default NavBar;
