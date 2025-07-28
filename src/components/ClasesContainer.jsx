import CardClase from "./CardClase";
import LineaCorta from "./LineaCorta";
import clases from "../mock/clases.json";

const ClasesContainer = () => {
  return (
    <section id="clases">
      <LineaCorta />
      <h2 className="text-center text-2xl italic">Nuestras Clases</h2>
      <LineaCorta />
      <div className="grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-[10px] pt-[20px] my-[15px] mx-auto">
        {clases.map((clase, id) => (
          <CardClase key={id} clase={clase} />
        ))}
      </div>
    </section>
  );
};

export default ClasesContainer;
