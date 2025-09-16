import { db } from "./firebase";
import {
  addDoc,
  collection,
  doc,
  runTransaction,
  serverTimestamp,
} from "firebase/firestore";

export async function crearReservaTransaccional({
  claseId,
  horarioId,
  claseNombre,
  horarioDia,
  horarioHora,
  datosUsuario,
}) {
  const horarioRef = doc(db, "clases", claseId, "horarios", horarioId);
  const reservasCol = collection(db, "reservas");

  return await runTransaction(db, async (transaction) => {
    const horarioSnap = await transaction.get(horarioRef);
    if (!horarioSnap.exists()) {
      throw new Error("El horario no existe");
    }
    const horario = horarioSnap.data();

    if (horario.reservas >= horario.disponibilidad) {
      throw new Error("No hay cupos disponibles para esa fecha");
    }

    transaction.update(horarioRef, {
      reservas: (horario.reservas || 0) + 1,
    });

    const order = {
      datos: datosUsuario,
      clase: {
        nombre: claseNombre,
        dia: horarioDia,
        hora: horarioHora,
      },
      horarioRef: horarioRef.path,
      date: serverTimestamp(),
    };

    const reservaRef = await addDoc(reservasCol, order);
    return { ...order, id: reservaRef.id };
  });
}
