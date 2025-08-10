import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../services/firebase";

export const useClases = () => {
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

  return { datos, loading };
};
