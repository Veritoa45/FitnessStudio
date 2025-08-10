import ClasesList from "./ClasesList";
import LineaCorta from "./LineaCorta";
import Loader from "./Loader";
import { useClases } from "../hooks/useClases";

const ClasesContainer = () => {
  const { datos, loading } = useClases();

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
