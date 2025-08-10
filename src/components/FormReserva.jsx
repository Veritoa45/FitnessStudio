import { useContext } from "react";
import { ClasesContext } from "../context/ClasesContext";

const FormReserva = () => {
  const { claseSeleccionada, horarioSeleccionado } = useContext(ClasesContext);
  console.log(claseSeleccionada);
  const fechasDisponibles =
    claseSeleccionada?.horarios && horarioSeleccionado?.hora
      ? claseSeleccionada.horarios.filter(
          (h) => h.hora === horarioSeleccionado.hora
        )
      : [];

  console.log("Fechas disponibles:", fechasDisponibles);

  return (
    <form>
      <label>Clase:</label>
      <p>{claseSeleccionada?.nombre}</p>
      <label>Día:</label>
      <p>{horarioSeleccionado?.dia}</p>
      <label>Hora:</label>
      <p>{horarioSeleccionado?.hora}</p>
      <label>Fechas disponibles:</label>
      <select name="fecha" required>
        {fechasDisponibles.length > 0 ? (
          fechasDisponibles.map((fecha) => (
            <option key={fecha.id} value={fecha.dia}>
              {fecha.dia}
            </option>
          ))
        ) : (
          <option value="">No hay fechas disponibles</option>
        )}
      </select>
      <label>Nombre:</label>
      <input type="text" name="nombre" required />
      <label>Apellido:</label>
      <input type="text" name="apellido" required />
      <label>Email:</label>
      <input type="email" name="email" required />
      <label>Teléfono:</label>
      <input type="number" name="telefono" required />
      <button type="submit">Reservar</button>
    </form>
  );
};

export default FormReserva;
