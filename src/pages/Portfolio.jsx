import React, { useState } from "react";
import "./Portfolio.css";
import Card from "../components/Card";

const Portfolio = () => {
  // Array com os projetos (agora usando projectsData consistentemente)
  const projectsData = [
    {
      id: 1,
      titulo: "Portfólio Pessoal 2024",
      imagem: "https://placehold.co/295x187/png",
      categoria: "web design",
    },
    {
      id: 2,
      titulo: "IMC com REACT",
      imagem: "https://placehold.co/295x187/png",
      categoria: "aplicacao",
    },
    {
      id: 3,
      titulo: "ChatBot WhatsApp",
      imagem: "https://placehold.co/295x187/png",
      categoria: "aplicacao",
    },
    {
      id: 4,
      titulo: "Cartão de Visitas",
      imagem: "https://placehold.co/295x187/png",
      categoria: "web development",
    },
    {
      id: 5,
      titulo: "Catálogo de Filmes",
      imagem: "https://placehold.co/295x187/png",
      categoria: "web development",
    },
    {
      id: 6,
      titulo: "Portfólio Criativo",
      imagem: "https://placehold.co/295x187/png",
      categoria: "web design",
    },
  ];

  // Estado corrigido (não use desestruturação no useState)
  const [filtroAtual, setFiltroAtual] = useState("todos");

  // Filtro corrigido (usando projectsData e categoria correta)
  const projetosFiltrados =
    filtroAtual === "todos"
      ? projectsData
      : projectsData.filter((projeto) => projeto.categoria === filtroAtual);

  return (
    <div className="portfolio-page">
      <Card />
      <main className="portfolio-container">
        <section className="portfolio-section">
          <div className="linha">
            <h2>Portfólio</h2>
            <div className="barra"></div>
          </div>

          <div className="linha">
            <nav className="portfolio-nav">
              <button
                onClick={() => setFiltroAtual("todos")}
                className={filtroAtual === "todos" ? "ativo" : ""}
              >
                Todos
              </button>
              <button
                onClick={() => setFiltroAtual("web design")}
                className={filtroAtual === "web design" ? "ativo" : ""}
              >
                Web Design
              </button>
              <button
                onClick={() => setFiltroAtual("aplicacao")}
                className={filtroAtual === "aplicacao" ? "ativo" : ""}
              >
                Aplicações
              </button>
              <button
                onClick={() => setFiltroAtual("web development")}
                className={filtroAtual === "web development" ? "ativo" : ""}
              >
                Web Development
              </button>
            </nav>
          </div>

          <div className="lista-projetos">
            {projetosFiltrados.map((projeto) => (
              <figure key={projeto.id} className="card-projeto">
                <img src={projeto.imagem} alt={projeto.titulo} />
                <div className="text">
                  <h3 className="nome-projeto">{projeto.titulo}</h3>
                  <p className="tipo-projeto">
                    {projeto.categoria === "aplicacao"
                      ? "Aplicação"
                      : projeto.categoria === "web design"
                      ? "Web Design"
                      : "Web Development"}
                  </p>
                </div>
              </figure>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Portfolio;
