import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../services/firebase";
import Calendario from "./Calendario";
import Loader from "./Loader";
import LineaCorta from "./LineaCorta";

const CalendarioContainer = () => {
  const { clase: nombre } = useParams();
  const [detail, setDetail] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const obtenerClase = async () => {
      try {
        setLoading(true);
        const clasesRef = collection(db, "clases");
        const q = query(clasesRef, where("nombre", "==", nombre));
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
          const claseDoc = querySnapshot.docs[0];
          setDetail({ id: claseDoc.id, ...claseDoc.data() });
        } else {
          console.error("No se encontró la clase con el nombre:", nombre);
        }
      } catch (error) {
        console.error("Error al obtener la clase:", error);
      } finally {
        setLoading(false);
      }
    };

    if (nombre) {
      obtenerClase();
    }
  }, [nombre]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : detail ? (
        <div>
          <LineaCorta />
          <h2 className="text-center text-2xl italic">
            Clases de {detail.nombre}
          </h2>
          <LineaCorta />
          <h3 className="text-center text-2xl italic font-semibold mt-[40px]">
            Reservá tu turno ahora. ¡No te lo pierdas!
          </h3>
          <h4 className="text-center text-xl italic mt-4">
            Elegí el día y horario que más te convenga
          </h4>
          <Calendario detail={detail} />
        </div>
      ) : (
        <p>No se encontró la clase.</p>
      )}
    </>
  );
};

export default CalendarioContainer;
