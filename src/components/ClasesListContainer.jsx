import { useEffect, useState } from "react";
import ClasesList from "./ClasesList";
import LineaCorta from "./LineaCorta";
import Loader from "./Loader";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../services/firebase";
//import clases from "../mock/clases.json";

const ClasesContainer = () => {
  const [loading, setLoading] = useState(false);
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    const getDatos = async () => {
      setLoading(true);

      try {
        const coleccionRef = collection(db, "clases");
        const res = await getDocs(coleccionRef);
        const listaClases = res.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setDatos(listaClases);
      } catch (error) {
        console.error("Error fetching clases:", error);
      } finally {
        setLoading(false);
      }
    };

    getDatos();
  }, []);

  return (
    <section id="clases">
      <LineaCorta />
      <h2 className="text-center text-2xl italic">Nuestras Clases</h2>
      <LineaCorta />
      {loading ? <Loader /> : <ClasesList datos={datos} />}
    </section>
  );
};

export default ClasesContainer;
