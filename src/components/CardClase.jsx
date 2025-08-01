import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ClasesContext } from "../context/ClasesContext";

const CardClase = ({ clase }) => {
  const { setClaseSeleccionada } = useContext(ClasesContext);
  const navigate = useNavigate();

  const handleClick = () => {
    setClaseSeleccionada(clase);
    navigate(`/reserva/${clase.nombre}`);
  };

  return (
    <>
      <div
        className="relative rounded-md overflow-hidden w-[95%] cursor-pointer group"
        onClick={handleClick}
      >
        <img
          src={clase.imagen}
          alt={clase.nombre}
          className="h-[300px] w-full object-cover align-top"
        />
        <h4 className="texto-banner">{clase.nombre}</h4>
        <div className="absolute inset-0 bg-gray-900 bg-opacity-50 opacity-0 group-hover:opacity-75 flex items-center justify-center transition-opacity duration-300">
          <span className="text-slate-100 text-2xl font-semibold">Reservá</span>
        </div>
      </div>
    </>
  );
};

export default CardClase;
