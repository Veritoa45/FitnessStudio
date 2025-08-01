import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ClasesContext } from "../context/ClasesContext";

const Calendario = ({ detail }) => {
  const { setClaseSeleccionada, setHorarioSeleccionado } =
    useContext(ClasesContext);
  const navigate = useNavigate();

  const handleClick = (horario) => {
    setClaseSeleccionada(detail);
    setHorarioSeleccionado(horario);
    navigate("/form-reserva");
  };

  console.log(detail);
  return (
    <div className="flex justify-center items-center h-[calc(100vh-500px)] gap-[400px]">
      {detail.horariosDisponibles.map((horario, index) => (
        <button
          key={index}
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
