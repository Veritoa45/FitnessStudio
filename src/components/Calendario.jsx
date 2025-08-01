import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ClasesContext } from "../context/ClasesContext";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../services/firebase";

const Calendario = ({ detail }) => {
  const {
    clase: { claseSeleccionada, setClaseSeleccionada },
    horario: { horarioSeleccionado, setHorarioSeleccionado },
    fecha: { fechaSeleccionada, setFechaSeleccionada },
  } = useContext(ClasesContext);
  const navigate = useNavigate();

  const handleClick = async (horario) => {
    setClaseSeleccionada(detail);
    setHorarioSeleccionado(horario);

    try {
      const horariosRef = collection(db, `clases/${detail.id}/horarios`);
      const snapshot = await getDocs(horariosRef);

      const fechasFiltradas = snapshot.docs
        .map((doc) => doc.id)
        .filter((fechaStr) => {
          const [fecha, hora] = fechaStr.split("_");
          return hora === horario.hora;
        });

      setFechaSeleccionada({ dia: fechasFiltradas });
      navigate("/form-reserva");
    } catch (error) {
      console.error("Error al obtener fechas:", error);
    }
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
