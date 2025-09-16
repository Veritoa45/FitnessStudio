import { useContext, useState } from "react";
import { ClasesContext } from "../context/ClasesContext";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { crearReservaTransaccional } from "../services/reservas";

const schema = z.object({
  fecha: z.string().min(1, "Seleccioná una fecha."),
  nombre: z
    .string()
    .min(4, "El nombre debe tener al menos 4 caracteres.")
    .max(60, "Máximo 60 caracteres."),
  apellido: z
    .string()
    .min(2, "El apellido debe tener al menos 2 caracteres.")
    .max(60, "Máximo 60 caracteres."),
  email: z
    .string()
    .email("Ingrese un mail válido.")
    .max(120, "Máximo 120 caracteres."),
  telefono: z
    .string()
    .regex(/^[0-9]+$/, "El teléfono solo debe contener números.")
    .min(10, "El teléfono debe tener al menos 10 dígitos.")
    .max(20, "Máximo 20 dígitos."),
});

const FormReserva = ({ setOrder }) => {
  const { claseSeleccionada, horarioSeleccionado } = useContext(ClasesContext);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({ resolver: zodResolver(schema), mode: "onTouched" });
  const [submitError, setSubmitError] = useState(null);

  const fechasDisponibles =
    claseSeleccionada?.horarios && horarioSeleccionado?.hora
      ? claseSeleccionada.horarios.filter(
          (h) =>
            h.hora === horarioSeleccionado.hora && h.disponibilidad > h.reservas
        )
      : [];

  const reservar = async (datosForm) => {
    setSubmitError(null);
    const horarioElegido = claseSeleccionada.horarios.find(
      (h) => h.hora === horarioSeleccionado.hora && h.dia === datosForm.fecha
    );

    if (
      !horarioElegido ||
      horarioElegido.reservas >= horarioElegido.disponibilidad
    ) {
      alert("No hay cupos disponibles para esa fecha.");
      return;
    }
    const datosUsuario = {
      nombre: datosForm.nombre,
      apellido: datosForm.apellido,
      telefono: datosForm.telefono,
      email: datosForm.email,
    };

    try {
      const result = await crearReservaTransaccional({
        claseId: claseSeleccionada.id,
        horarioId: horarioElegido.id,
        claseNombre: claseSeleccionada.nombre,
        horarioDia: horarioSeleccionado.dia,
        horarioHora: horarioSeleccionado.hora,
        datosUsuario,
      });
      setOrder({
        ...result,
        clase: { ...result.clase, fecha: datosForm.fecha },
      });
      reset();
    } catch (error) {
      console.error("Error al crear la orden: ", error);
      setSubmitError(
        "Ocurrió un error al procesar tu reserva. Intentalo nuevamente."
      );
    }
  };

  return (
    <form
      className="max-w-sm mx-auto flex flex-col gap-2 h-[calc(100vh-350px)]"
      onSubmit={handleSubmit(reservar)}
    >
      <div className="flex gap-4 py-2">
        <h4 className="font-semibold">Clase:</h4>
        <p>{claseSeleccionada?.nombre}</p>
      </div>
      <div className="flex gap-4 py-2">
        <h4 className="font-semibold">Día:</h4>
        <p>{horarioSeleccionado?.dia}</p>
      </div>
      <div className="flex gap-4 py-2">
        <h4 className="font-semibold">Hora:</h4>
        <p>{horarioSeleccionado?.hora}</p>
      </div>
      <div className="flex items-center gap-4 py-2">
        <label className="font-semibold">Fechas disponibles:</label>
        <select
          className="p-2 bg-gray-800 rounded-xl"
          {...register("fecha")}
          disabled={fechasDisponibles.length === 0}
        >
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
      </div>
      {errors.fecha && (
        <span className="text-red-600 mb-2">{errors.fecha.message}</span>
      )}
      <div className="flex items-center gap-4 py-2">
        <label className="font-semibold">Nombre:</label>
        <input
          type="text"
          className="rounded-xl p-1 outline-none"
          name="nombre"
          placeholder="Ingrese su nombre..."
          {...register("nombre")}
        />
      </div>
      {errors.nombre && (
        <span className="text-red-600 mb-2">{errors.nombre.message}</span>
      )}
      <div className="flex items-center gap-4 py-2">
        <label className="font-semibold">Apellido:</label>
        <input
          type="text"
          className="rounded-xl p-1 outline-none"
          placeholder="Ingrese su apellido..."
          {...register("apellido")}
        />
      </div>
      {errors.apellido && (
        <span className="text-red-600 mb-2">{errors.apellido.message}</span>
      )}
      <div className="flex items-center gap-4 py-2">
        <label className="font-semibold">Email:</label>
        <input
          type="email"
          className="rounded-xl p-1 outline-none"
          placeholder="Ingrese su mail..."
          {...register("email")}
        />
      </div>
      {errors.email && (
        <span className="text-red-600  mb-2">{errors.email.message}</span>
      )}
      <div className="flex items-center gap-4 py-2">
        <label className="font-semibold">Teléfono:</label>
        <input
          type="text"
          className="rounded-xl p-1 outline-none"
          placeholder="Ingrese su teléfono..."
          {...register("telefono")}
        />
      </div>
      {errors.telefono && (
        <span className="text-red-600 mb-2">{errors.telefono.message}</span>
      )}
      {submitError && (
        <span className="text-red-600 mb-2" role="alert">
          {submitError}
        </span>
      )}
      <button
        type="submit"
        className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 cursor-pointer"
        disabled={fechasDisponibles.length === 0 || isSubmitting}
      >
        {isSubmitting ? "Procesando..." : "Reservar"}
      </button>
    </form>
  );
};

export default FormReserva;
