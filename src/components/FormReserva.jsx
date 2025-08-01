import { useContext } from "react";
import { ClasesContext } from "../context/ClasesContext";

const FormReserva = () => {
  const { claseSeleccionada, horarioSeleccionado } = useContext(ClasesContext);

  return (
    <form>
      Hola
      {/*<p>Clase: {claseSeleccionada?.nombre}</p>
      <p>Fecha: {fechaSeleccionada}</p>
      <p>Horario: {horarioSeleccionado}</p>
      <p>Disponibilidad: {disponibilidad > 0 ? disponibilidad : "Sin cupos"}</p>*/}
      {/* Inputs para nombre, email y fecha */}
    </form>
  );
};

export default FormReserva;
