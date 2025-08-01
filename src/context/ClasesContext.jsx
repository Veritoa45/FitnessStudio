import { createContext, useState } from "react";

export const ClasesContext = createContext();

export const ClasesProvider = ({ children }) => {
  const [claseSeleccionada, setClaseSeleccionada] = useState(null);
  const [horarioSeleccionado, setHorarioSeleccionado] = useState(null);
  const [fechaSeleccionada, setFechaSeleccionada] = useState(null);
  const [cantidadMaxima, setCantidadMaxima] = useState(null);
  const [cantidadReservas, setCantidadReservas] = useState(null);

  return (
    <ClasesContext.Provider
      value={{
        clase: {
          claseSeleccionada,
          setClaseSeleccionada,
        },
        horario: {
          horarioSeleccionado,
          setHorarioSeleccionado,
        },
        fecha: {
          fechaSeleccionada,
          setFechaSeleccionada,
        },
        cantidad: {
          cantidadMaxima,
          setCantidadMaxima,
          cantidadReservas,
          setCantidadReservas,
        },
      }}
    >
      {children}
    </ClasesContext.Provider>
  );
};
