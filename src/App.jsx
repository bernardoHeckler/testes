import { Routes, Route } from "react-router-dom";

// Páginas ./pages
import Card from "./components/Card";
import SobreMim from "./pages/SobreMim";
import NotFound from "./pages/NotFound";
import "./App.css";
import NavBar from "./components/NavBar";

export default function App() {
  return (
    <div className="app">
      {/* Configuração de rotas */}
      <Routes>
        <Route path="/" element={<Card />} />
        <Route path="/sobreMim" element={<SobreMim />} />
        <Route path="*" element={<NotFound />} /> {/* Rota 404 */}
      </Routes>
      {/* Menu de navegação */}
      <NavBar />
    </div>
  );
}
