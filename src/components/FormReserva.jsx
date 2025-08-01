import { useContext } from "react";
import { ClasesContext } from "../context/ClasesContext";

const FormReserva = () => {
  const {
    clase: { claseSeleccionada },
    horario: { horarioSeleccionado },
    fecha: { fechaSeleccionada },
  } = useContext(ClasesContext);

  return (
    <form>
      <label htmlFor="">Clase:</label>
      <p>{claseSeleccionada?.nombre}</p>
      <label htmlFor="">Día:</label>
      <p>{horarioSeleccionado?.dia}</p>
      <label htmlFor="">Hora:</label>
      <p>{horarioSeleccionado?.hora}</p>
      <label htmlFor="">Fechas disponibles:</label>
      <select name="" id="">
        {fechaSeleccionada?.dia?.map((fecha, index) => (
          <option key={index} value={fecha}>
            {fecha}
          </option>
        ))}
      </select>
      <label htmlFor="">Nombre:</label>
      <input type="text" name="nombre" required />
      <label htmlFor="">Apellido:</label>
      <input type="text" name="apellido" required />
      <label htmlFor="">Email:</label>
      <input type="email" name="email" required />
      <button type="submit">Reservar</button>
    </form>
  );
};

export default FormReserva;
