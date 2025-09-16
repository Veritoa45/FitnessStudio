import { useContext, useEffect } from "react";
import { ClasesContext } from "../context/ClasesContext";
import Calendario from "./Calendario";
import Loader from "./Loader";
import LineaCorta from "./LineaCorta";
import { useNavigate } from "react-router-dom";

const CalendarioContainer = () => {
  const { claseSeleccionada } = useContext(ClasesContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!claseSeleccionada) {
      const timeoutId = setTimeout(() => {
        navigate("/", { replace: true });
      }, 1200);
      return () => clearTimeout(timeoutId);
    }
  }, [claseSeleccionada, navigate]);

  if (!claseSeleccionada) {
    return (
      <>
        <LineaCorta />
        <h2 className="text-center text-xl italic mt-6">
          Preparando tu experiencia...
        </h2>
        <LineaCorta />
        <p className="text-center mt-2">
          Te estamos redirigiendo para elegir una clase.
        </p>
        <Loader />
      </>
    );
  }

  return (
    <>
      <LineaCorta />
      <h2 className="text-center text-2xl italic">
        Clases de {claseSeleccionada.nombre}
      </h2>
      <LineaCorta />
      <h3 className="text-center text-2xl italic font-semibold mt-[40px]">
        Reservá tu turno ahora. ¡No te lo pierdas!
      </h3>
      <h4 className="text-center text-xl italic mt-4">
        Elegí el día y horario que más te convenga
      </h4>
      <Calendario detail={claseSeleccionada} />
    </>
  );
};

export default CalendarioContainer;
