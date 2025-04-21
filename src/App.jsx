import { Routes, Route } from "react-router-dom";

// Páginas ./pages
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import "./App.css";
import NavBar from "./components/NavBar";

export default function App() {
  return (
    <div className="app">
      {/* Configuração de rotas */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} /> {/* Rota 404 */}
      </Routes>
      {/* Menu de navegação */}
      <NavBar />
    </div>
  );
}
