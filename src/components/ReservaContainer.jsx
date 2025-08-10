import { useContext } from "react";
import { ClasesContext } from "../context/ClasesContext";
import FormReserva from "./FormReserva";

const ReservaContainer = () => {
  const { claseSeleccionada, horarioSeleccionado, fechaSeleccionada } =
    useContext(ClasesContext);

  return (
    <div>
      <h2>Completá el formulario para reservar</h2>
      <FormReserva
        clase={claseSeleccionada}
        horario={horarioSeleccionado}
        fecha={fechaSeleccionada}
      />
    </div>
  );
};

export default ReservaContainer;
