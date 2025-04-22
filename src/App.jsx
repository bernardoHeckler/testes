import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Card from "./components/Card";
import SobreMim from "./pages/SobreMim";
import Carreira from "./pages/Carreira";
import NotFound from "./pages/NotFound";
import "./App.css";
import NavBar from "./components/NavBar";

export default function App() {
  return (
    <Router basename="/testes">  {/* basename igual ao repositório */}
      <div className="app">
        <Routes>
          <Route path="/" element={<Card />} />
          <Route path="/sobreMim" element={<SobreMim />} />
          <Route path="/carreira" element={<Carreira />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <NavBar />
      </div>
    </Router>
  );
}