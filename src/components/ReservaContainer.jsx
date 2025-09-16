import { useContext, useEffect, useState } from "react";
import { ClasesContext } from "../context/ClasesContext";
import FormReserva from "./FormReserva";
import Order from "./Order";
import { useNavigate } from "react-router-dom";
import LineaCorta from "./LineaCorta";
import Loader from "./Loader";

const ReservaContainer = () => {
  const { claseSeleccionada, horarioSeleccionado, fechaSeleccionada } =
    useContext(ClasesContext);
  const [order, setOrder] = useState(null);
  const navigate = useNavigate();

  // Para ingresar al formulario solo exigimos clase y horario; la fecha se elige en el form
  const hasAllRequired =
    Boolean(claseSeleccionada) && Boolean(horarioSeleccionado);

  useEffect(() => {
    if (!hasAllRequired) {
      const timeoutId = setTimeout(() => {
        navigate("/", { replace: true });
      }, 1200);
      return () => clearTimeout(timeoutId);
    }
  }, [hasAllRequired, navigate]);

  if (!hasAllRequired) {
    return (
      <>
        <LineaCorta />
        <h2 className="text-center text-xl italic mt-6">
          Preparando tu experiencia...
        </h2>
        <LineaCorta />
        <p className="text-center mt-2">
          Te estamos redirigiendo para elegir una clase y horario.
        </p>
        <Loader />
      </>
    );
  }

  return (
    <>
      {order ? (
        <Order order={order} />
      ) : (
        <>
          <h2 className="text-center text-3xl font-semibold mb-[50px]">
            Completá el formulario para reservar
          </h2>
          <FormReserva
            clase={claseSeleccionada}
            horario={horarioSeleccionado}
            fecha={fechaSeleccionada}
            setOrder={setOrder}
          />
        </>
      )}
    </>
  );
};

export default ReservaContainer;
