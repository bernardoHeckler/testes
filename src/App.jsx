import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Páginas ./pages
import Card from "./components/Card";
import SobreMim from "./pages/SobreMim";
import Carreira from "./pages/Carreira";
import NotFound from "./pages/NotFound";
import "./App.css";
import NavBar from "./components/NavBar";

export default function App() {
  return (
    <Router>
      <div className="app">
        <NavBar />
        {/* Configuração de rotas */}
        <Routes>
          <Route index element={<Card />} />
          <Route path="/" element={<Card />} />
          <Route path="/sobreMim" element={<SobreMim />} />
          <Route path="/carreira" element={<Carreira />} />
          <Route path="*" element={<NotFound />} /> {/* Rota 404 */}
        </Routes>
      </div>
    </Router>
  );
}