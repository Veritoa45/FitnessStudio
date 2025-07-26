import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomeContainer from "./components/HomeContainer";
import ReservaContainer from "./components/ReservaContainer";
import MisReservasContainer from "./components/MisReservasContainer";
import ErrorPage from "./components/ErrorPage";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomeContainer />} />
        <Route path="/reserva/:clase" element={<ReservaContainer />} />
        <Route path="/mis-reservas" element={<MisReservasContainer />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
