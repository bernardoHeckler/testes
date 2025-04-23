import { Routes, Route } from "react-router-dom";

// Páginas ./pages
import Card from "./components/Card";
import SobreMim from "./pages/SobreMim";
import Carreira from "./pages/Carreira";
import NotFound from "./pages/NotFound";
import "./App.css";
import NavBar from "./components/NavBar";
import Blog from "./pages/Blog";
import Contato from "./pages/Contato";

export default function App() {
  return (
    <div className="app">
      {/* Configuração de rotas */}
      <Routes>
        <Route path="/" element={<Card />} />
        <Route path="/sobreMim" element={<SobreMim />} />
        <Route path="/carreira" element={<Carreira />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="*" element={<NotFound />} /> {/* Rota 404 */}
      </Routes>
      {/* Menu de navegação */}
      <NavBar />
    </div>
  );
}
