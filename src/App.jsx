import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import HomeContainer from "./components/HomeContainer";
import CalendarioContainer from "./components/CalendarioContainer";
import ReservaContainer from "./components/ReservaContainer";
import MisReservasContainer from "./components/MisReservasContainer";
import PageNotFound from "./components/PageNotFound";
import Footer from "./components/Footer";
import LineaLarga from "./components/LineaLarga";
import { ClasesProvider } from "./context/ClasesContext";

function App() {
  return (
    <BrowserRouter>
      <ClasesProvider>
        <Header />
        <Routes>
          <Route path="/" element={<HomeContainer />} />
          <Route path="/reserva/:clase" element={<CalendarioContainer />} />
          <Route path="/form-reserva" element={<ReservaContainer />} />
          <Route path="/mis-reservas" element={<MisReservasContainer />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <LineaLarga />
        <Footer />
      </ClasesProvider>
    </BrowserRouter>
  );
}

export default App;
