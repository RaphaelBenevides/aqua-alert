import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import FormularioLeitura from "./pages/formulario/FormularioLeitura";
import Home from "./pages/home/Home";
import Leituras from "./pages/leituras/Leituras";
import NaoEncontrada from "./pages/naoencontrada/NaoEncontrada";
import Sobre from "./pages/sobre/Sobre";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="min-h-[80vh] bg-zinc-950 text-zinc-100">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/leituras" element={<Leituras />} />
            <Route path="/leituras/nova" element={<FormularioLeitura />} />
            <Route path="/leituras/editar/:id" element={<FormularioLeitura />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="*" element={<NaoEncontrada />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
