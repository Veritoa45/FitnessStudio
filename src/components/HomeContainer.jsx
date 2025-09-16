import { lazy, Suspense } from "react";
import Entrena from "../assets/entrena.jpg";
import Loader from "./Loader";

const ClasesListContainer = lazy(() => import("./ClasesListContainer"));
const TestimonioContainer = lazy(() => import("./TestimonioContainer"));
const GaleriaGrid = lazy(() => import("./GaleriaGrid"));
const Contacto = lazy(() => import("./Contacto"));

const HomeContainer = () => {
  return (
    <div className="with-fixed-header">
      <h1 className="hidden">Fitness Studio</h1>
      <img src={Entrena} alt="Entrenamiento" className="w-full" />
      <div className="container p-4 mx-auto">
        <Suspense fallback={<Loader />}>
          <ClasesListContainer />
        </Suspense>
        <Suspense fallback={<Loader />}>
          <TestimonioContainer />
        </Suspense>
        <Suspense fallback={<Loader />}>
          <GaleriaGrid />
        </Suspense>
        <Suspense fallback={<Loader />}>
          <Contacto />
        </Suspense>
      </div>
    </div>
  );
};

export default HomeContainer;
