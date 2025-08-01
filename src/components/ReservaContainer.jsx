import { useContext } from "react";
import { ClasesContext } from "../context/ClasesContext";
import FormReserva from "./FormReserva";

const ReservaContainer = () => {
  const { claseSeleccionada, horarioSeleccionado } = useContext(ClasesContext);

  return (
    <div>
      <h2>Completá el formulario para reservar</h2>
      <FormReserva />
    </div>
  );
};

export default ReservaContainer;
