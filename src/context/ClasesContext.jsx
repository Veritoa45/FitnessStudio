import { createContext, useEffect, useMemo, useState } from "react";

export const ClasesContext = createContext();

export const ClasesProvider = ({ children }) => {
  const [claseSeleccionada, setClaseSeleccionada] = useState(() => {
    try {
      const raw = sessionStorage.getItem("claseSeleccionada");
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  });
  const [horarioSeleccionado, setHorarioSeleccionado] = useState(() => {
    try {
      const raw = sessionStorage.getItem("horarioSeleccionado");
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  });
  const [fechaSeleccionada, setFechaSeleccionada] = useState(() => {
    try {
      const raw = sessionStorage.getItem("fechaSeleccionada");
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  });

  useEffect(() => {
    try {
      if (claseSeleccionada) {
        sessionStorage.setItem(
          "claseSeleccionada",
          JSON.stringify(claseSeleccionada)
        );
      } else {
        sessionStorage.removeItem("claseSeleccionada");
      }
    } catch {}
  }, [claseSeleccionada]);

  useEffect(() => {
    try {
      if (horarioSeleccionado) {
        sessionStorage.setItem(
          "horarioSeleccionado",
          JSON.stringify(horarioSeleccionado)
        );
      } else {
        sessionStorage.removeItem("horarioSeleccionado");
      }
    } catch {}
  }, [horarioSeleccionado]);

  useEffect(() => {
    try {
      if (fechaSeleccionada) {
        sessionStorage.setItem(
          "fechaSeleccionada",
          JSON.stringify(fechaSeleccionada)
        );
      } else {
        sessionStorage.removeItem("fechaSeleccionada");
      }
    } catch {}
  }, [fechaSeleccionada]);

  // Derivar cantidadMaxima y cantidadReservas del horario seleccionado
  const cantidadMaxima = horarioSeleccionado?.disponibilidad ?? null;
  const cantidadReservas = horarioSeleccionado?.reservas ?? null;

  const value = useMemo(
    () => ({
      claseSeleccionada,
      setClaseSeleccionada,
      horarioSeleccionado,
      setHorarioSeleccionado,
      fechaSeleccionada,
      setFechaSeleccionada,
      cantidadMaxima,
      cantidadReservas,
    }),
    [
      claseSeleccionada,
      horarioSeleccionado,
      fechaSeleccionada,
      cantidadMaxima,
      cantidadReservas,
    ]
  );

  return (
    <ClasesContext.Provider value={value}>{children}</ClasesContext.Provider>
  );
};
