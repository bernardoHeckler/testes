import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="navbar-container">
      <nav className="navbar">
        <Link to="/sobreMim" className="nav-link">
          <p className="textoNav">Sobre</p>
        </Link>
        <Link to="/carreira" className="nav-link">
          <p className="textoNav">Carreira</p>
        </Link>
        <Link to="/portfolio" className="nav-link">
          <p className="textoNav">Portfólio</p>
        </Link>

        <Link to="/blog" className="nav-link">
          <p className="textoNav">Blog</p>
        </Link>

        <Link to="/contato" className="nav-link">
          <p className="textoNav">Contato</p>
        </Link>
      </nav>
    </div>
  );
};

export default NavBar;
