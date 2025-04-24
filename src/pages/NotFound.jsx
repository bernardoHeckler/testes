import React from "react";
import "./NotFound.css"; // Você pode criar um arquivo CSS para estilizar

const NotFound = () => {
  return (
    <div className="not-found-container">
      <h1>404 - Página Não Encontrada</h1>
      <p>Desculpe, a página que você está procurando não existe.</p>
      {/* Você pode adicionar um link para a página inicial */}
      <a href="/testes/">Voltar para a Página Inicial</a>
    </div>
  );
};

export default NotFound;
