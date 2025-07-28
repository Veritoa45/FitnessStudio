import Entrena from "../assets/entrena.jpg";
import ClasesContainer from "./ClasesContainer";
import TestimonioContainer from "./TestimonioContainer";
import GaleriaGrid from "./GaleriaGrid";
import Contacto from "./Contacto";

const HomeContainer = () => {
  return (
    <>
      <h1 className="hidden">Fitness Studio</h1>
      <img src={Entrena} alt="Entrenamiento" className="w-full" />
      <div className="container p-4 mx-auto">
        <ClasesContainer />
        <TestimonioContainer />
        <GaleriaGrid />
        <Contacto />
      </div>
    </>
  );
};

export default HomeContainer;
