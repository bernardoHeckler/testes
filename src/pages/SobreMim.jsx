import React from "react";
import "./SobreMim.css";
import IconeDev from "../iconeDev.svg";
import IconeMais from "../iconeMais.svg";
import IconeHtml from "../iconeHtml.svg";
import IconeCss from "../iconeCss.svg";
import IconeJs from "../iconeJavaScript.svg";
import IconeReact from "../iconeReact.svg";
import Card from "../components/Card";

const SobreMim = () => {
  return (
    <div>
      <Card />
      <main>
        <section className="SobreMim">
          <div className="linha">
            <h1>Sobre Mim</h1>
            <div className="barra"></div>
            <p className="descricao">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque
              laborum provident consequuntur facilis inventore quis perspiciatis
              enim et dolorem deserunt animi assumenda, doloremque, vero,
              officiis nisi commodi alias architecto nam?
            </p>
          </div>
          <div className="linha">
            <h2>O Que Estou Fazendo</h2>
            <div className="coluna">
              <section className="informacao">
                <div className="conteudo">
                  <img src={IconeDev} alt="icone" />
                  <div className="text">
                    <h3>Web Design</h3>
                    <p className="descricao">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Error nesciunt possimus perferendis dolores, re
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </div>
          <div className="linha">
            <h2>Futuras Ideias</h2>
            <div className="coluna">
              <section className="informacao">
                <div className="blocos">
                  <div className="blocoMaior">
                    <img src={IconeMais} alt="Algo" />
                  </div>
                  <div className="retangulos">
                    <div className="forma1"></div>
                    <div className="forma2"></div>
                    <div className="forma2"></div>
                  </div>
                </div>
              </section>
              <section className="informacao">
                <div className="blocos">
                  <div className="blocoMaior">
                    <img src={IconeMais} alt="Algo" />
                  </div>
                  <div className="retangulos">
                    <div className="forma1"></div>
                    <div className="forma2"></div>
                    <div className="forma2"></div>
                  </div>
                </div>
              </section>
            </div>
          </div>
          <div className="linha">
            <h2>Tecnologias</h2>
            <div className="coluna">
              <img className="tecnologiasImg" src={IconeHtml} alt="HTML" />
              <img className="tecnologiasImg" src={IconeJs} alt="JAVASCRIPT" />
              <img className="tecnologiasImg" src={IconeCss} alt="CSS" />
              <img className="tecnologiasImg" src={IconeReact} alt="REACT" />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default SobreMim;
