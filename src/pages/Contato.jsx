import React from "react";
import Card from "../components/Card";
import "./Contato.css";
import Form from "../components/Form";

const Contato = () => {
  return (
    <div>
      <Card />
      <main className="contato-container">
        <section className="contato-section">
          <h1>Contato</h1>
          <div className="barra"></div>
          <Form />
        </section>
      </main>
    </div>
  );
};

export default Contato;
