import CardClase from "./CardClase";
import LineaCorta from "./LineaCorta";

const ClasesContainer = () => {
  return (
    <section id="clases">
      <LineaCorta />
      <h2 className="text-center text-2xl italic">Nuestras Clases</h2>
      <LineaCorta />
      <div className="grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-[10px] pt-[20px] my-[15px] mx-auto">
        <CardClase />
      </div>
    </section>
  );
};

export default ClasesContainer;
