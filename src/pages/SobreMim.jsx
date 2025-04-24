import React from "react";
import "./SobreMim.css";
import SobreMimData from "../data/SobreMimData";
import Card from "../components/Card";

const SobreMim = () => {
  return (
    <div>
      <Card />
      <main>
        <section className="SobreMim">
          <div className="linha">
            <h1>{SobreMimData.titulo}</h1>
            <div className="barra"></div>
            <p className="descricao">
              {SobreMimData.descricao}
            </p>
          </div>
          
          <div className="linha">
            <h2>O Que Estou Fazendo</h2>
            <div className="coluna">
              {SobreMimData.atividades.map((atividade) => (
                <section key={atividade.id} className="informacao">
                  <div className="conteudo">
                    <img src={atividade.icone} alt="icone" />
                    <div className="text">
                      <h3>{atividade.titulo}</h3>
                      <p className="descricao">
                        {atividade.descricao}
                      </p>
                    </div>
                  </div>
                </section>
              ))}
            </div>
          </div>
          
          <div className="linha">
            <h2>Futuras Ideias</h2>
            <div className="coluna">
              {SobreMimData.futurasIdeias.map((ideia) => (
                <section key={ideia.id} className="informacao">
                  <div className="blocos">
                    <div className="blocoMaior">
                      <img src={ideia.icone} alt="Ideia futura" />
                    </div>
                    <div className="retangulos">
                      <div className="forma1"></div>
                      <div className="forma2"></div>
                      <div className="forma2"></div>
                    </div>
                  </div>
                </section>
              ))}
            </div>
          </div>
          
          <div className="linha">
            <h2>Tecnologias</h2>
            <div className="coluna">
              {SobreMimData.tecnologias.map((tech) => (
                <img 
                  key={tech.id}
                  className="tecnologiasImg" 
                  src={tech.icone} 
                  alt={tech.nome} 
                />
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default SobreMim;