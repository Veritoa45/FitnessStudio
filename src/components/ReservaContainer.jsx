import { useContext, useState } from "react";
import { ClasesContext } from "../context/ClasesContext";
import FormReserva from "./FormReserva";
import Order from "./Order";

const ReservaContainer = () => {
  const { claseSeleccionada, horarioSeleccionado, fechaSeleccionada } =
    useContext(ClasesContext);
  const [order, setOrder] = useState(null);

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
