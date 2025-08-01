import { useContext } from "react";
import { ClasesContext } from "../context/ClasesContext";
import FormReserva from "./FormReserva";

const ReservaContainer = () => {
  const {
    clase: { claseSeleccionada },
    horario: { horarioSeleccionado },
    fecha: { fechaSeleccionada },
  } = useContext(ClasesContext);

  return (
    <div>
      <h2>Completá el formulario para reservar</h2>
      <FormReserva />
    </div>
  );
};

export default ReservaContainer;
