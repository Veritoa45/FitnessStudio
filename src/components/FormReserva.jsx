import { useContext } from "react";
import { ClasesContext } from "../context/ClasesContext";
import { useForm } from "react-hook-form";
import { db } from "../services/firebase";
import {
  collection,
  addDoc,
  serverTimestamp,
  doc,
  updateDoc,
} from "firebase/firestore";

const FormReserva = ({ setOrder }) => {
  const { claseSeleccionada, horarioSeleccionado } = useContext(ClasesContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const fechasDisponibles =
    claseSeleccionada?.horarios && horarioSeleccionado?.hora
      ? claseSeleccionada.horarios.filter(
          (h) =>
            h.hora === horarioSeleccionado.hora && h.disponibilidad > h.reservas
        )
      : [];

  const reservar = async (datosForm) => {
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
    let order = {
      datos: {
        nombre: datosForm.nombre,
        apellido: datosForm.apellido,
        telefono: datosForm.telefono,
        email: datosForm.email,
      },
      clase: {
        nombre: claseSeleccionada.nombre,
        dia: horarioSeleccionado.dia,
        hora: horarioSeleccionado.hora,
        fecha: datosForm.fecha,
      },
      date: serverTimestamp(),
    };

    try {
      const horarioDocRef = doc(
        db,
        "clases",
        claseSeleccionada.id,
        "horarios",
        horarioElegido.id
      );
      await updateDoc(horarioDocRef, {
        reservas: horarioElegido.reservas + 1,
      });

      const reservas = collection(db, "reservas");
      const res = await addDoc(reservas, order);
      setOrder({ ...order, id: res.id });
    } catch (error) {
      console.error("Error al crear la orden: ", error);
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
          {...register("fecha", { required: "Seleccioná una fecha." })}
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
          {...register("nombre", {
            required: "Por favor, ingrese su nombre.",
            minLength: {
              value: 4,
              message: "El nombre debe tener al menos 4 caracteres.",
            },
          })}
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
          {...register("apellido", {
            required: "Por favor, ingrese su apellido.",
            minLength: {
              value: 2,
              message: "El apellido debe tener al menos 2 caracteres.",
            },
          })}
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
          {...register("email", {
            required: "Por favor, ingrese su mail.",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Ingrese un mail válido.",
            },
          })}
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
          {...register("telefono", {
            required: "Por favor, ingrese su número de teléfono.",
            minLength: {
              value: 10,
              message: "El teléfono debe tener al menos 10 dígitos.",
            },
            pattern: {
              value: /^[0-9]+$/,
              message: "El teléfono solo debe contener números.",
            },
          })}
        />
      </div>
      {errors.telefono && (
        <span className="text-red-600 mb-2">{errors.telefono.message}</span>
      )}
      <button
        type="submit"
        className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 cursor-pointer"
        disabled={fechasDisponibles.length === 0}
      >
        Reservar
      </button>
    </form>
  );
};

export default FormReserva;
