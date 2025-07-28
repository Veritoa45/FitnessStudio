import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import HomeContainer from "./components/HomeContainer";
import ReservaContainer from "./components/ReservaContainer";
import MisReservasContainer from "./components/MisReservasContainer";
import ErrorPage from "./components/ErrorPage";
import Footer from "./components/Footer";
import LineaLarga from "./components/LineaLarga";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomeContainer />} />
        <Route path="/reserva/:clase" element={<ReservaContainer />} />
        <Route path="/mis-reservas" element={<MisReservasContainer />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <LineaLarga />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
