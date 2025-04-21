import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css"; // Arquivo CSS que vamos criar

const NavBar = () => {
  return (
    <div className="navbar-container">
      <nav className="navbar">
        <Link to="/about" className="nav-link">
          <p className="textoNav">Sobre</p>
        </Link>
        <Link to="/" className="nav-link">
          <p className="textoNav">Carreira</p>
        </Link>
        <Link to="/" className="nav-link">
          <p className="textoNav">Portfólio</p>
        </Link>

        <Link to="/" className="nav-link">
          <p className="textoNav">Blog</p>
        </Link>

        <Link to="/" className="nav-link">
          <p className="textoNav">Contato</p>
        </Link>
      </nav>
    </div>
  );
};

export default NavBar;
