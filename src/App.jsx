import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LineaLarga from "./components/LineaLarga";
import Loader from "./components/Loader";
import ErrorBoundary from "./components/ErrorBoundary";
import { ClasesProvider } from "./context/ClasesContext";

const HomeContainer = lazy(() => import("./components/HomeContainer"));
const CalendarioContainer = lazy(() =>
  import("./components/CalendarioContainer")
);
const ReservaContainer = lazy(() => import("./components/ReservaContainer"));
const MisReservasContainer = lazy(() =>
  import("./components/MisReservasContainer")
);
const PageNotFound = lazy(() => import("./components/PageNotFound"));

function App() {
  return (
    <BrowserRouter>
      <ClasesProvider>
        <ErrorBoundary>
          <Header />
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<HomeContainer />} />
              <Route path="/reserva/:clase" element={<CalendarioContainer />} />
              <Route path="/form-reserva" element={<ReservaContainer />} />
              <Route path="/mis-reservas" element={<MisReservasContainer />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </Suspense>
          <LineaLarga />
          <Footer />
        </ErrorBoundary>
      </ClasesProvider>
    </BrowserRouter>
  );
}

export default App;
