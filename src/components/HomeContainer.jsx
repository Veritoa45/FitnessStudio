import ClasesContainer from "./ClasesContainer";
import Entrena from "../assets/entrena.jpg";

const HomeContainer = () => {
  return (
    <>
      <h1 className="hidden">Fitness Studio</h1>
      <img src={Entrena} alt="Entrenamiento" className="w-full" />
      <div className="container p-4 mx-auto">
        <ClasesContainer />
      </div>
    </>
  );
};

export default HomeContainer;
