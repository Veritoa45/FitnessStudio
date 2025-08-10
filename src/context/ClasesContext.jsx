import { createContext, useState } from "react";

export const ClasesContext = createContext();

export const ClasesProvider = ({ children }) => {
  const [claseSeleccionada, setClaseSeleccionada] = useState(null);
  const [horarioSeleccionado, setHorarioSeleccionado] = useState(null);
  const [fechaSeleccionada, setFechaSeleccionada] = useState(null);

  // Derivar cantidadMaxima y cantidadReservas del horario seleccionado
  const cantidadMaxima = horarioSeleccionado?.disponibilidad ?? null;
  const cantidadReservas = horarioSeleccionado?.reservas ?? null;

  return (
    <ClasesContext.Provider
      value={{
        claseSeleccionada,
        setClaseSeleccionada,
        horarioSeleccionado,
        setHorarioSeleccionado,
        fechaSeleccionada,
        setFechaSeleccionada,
        cantidadMaxima,
        cantidadReservas,
      }}
    >
      {children}
    </ClasesContext.Provider>
  );
};
