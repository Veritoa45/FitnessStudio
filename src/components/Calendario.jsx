import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ClasesContext } from "../context/ClasesContext";

const Calendario = ({ detail }) => {
  const { setHorarioSeleccionado } = useContext(ClasesContext);
  const navigate = useNavigate();

  const handleClick = async (horario) => {
    setHorarioSeleccionado(horario);
    navigate("/form-reserva");
  };

  return (
    <div className="flex justify-center items-center h-[calc(100vh-500px)] gap-[400px]">
      {detail.horariosDisponibles.map((horario) => (
        <button
          key={`${horario.dia}-${horario.hora}`}
          onClick={() => handleClick(horario)}
          className="flex flex-col justify-center align-center border w-[200px] h-[200px] rounded-lg bg-gray-800 hover:bg-gray-900 gap-[20px] cursor-pointer"
        >
          <h3 className="text-3xl font-semibold">{horario.dia}</h3>
          <p className="text-3xl">{horario.hora}</p>
        </button>
      ))}
    </div>
  );
};

export default Calendario;
