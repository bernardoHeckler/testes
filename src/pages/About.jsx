import React from "react";
import "./About.css";

const About = () => {
  return (
    <div>
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
            <h1>O Que Estou Fazendo</h1>
            <div className="coluna">
              <section className="informacao">
                <div className="conteudo">
                  <img src="#" alt="icone" />
                  <div className="text">
                    <h2>Web Design</h2>
                    <p className="descricao">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Error nesciunt possimus perferendis dolores, re
                    </p>
                  </div>
                </div>
              </section>
              <section className="informacao">
                <div className="conteudo">
                  <img src="#" alt="icone" />
                  <div className="text">
                    <h2>Web Design</h2>
                    <p className="descricao">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Error nesciunt possimus perferendis dolores, re
                    </p>
                  </div>
                </div>
              </section>
              <section className="informacao">
                <div className="conteudo">
                  <img src="#" alt="icone" />
                  <div className="text">
                    <h2>Web Design</h2>
                    <p className="descricao">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Error nesciunt possimus perferendis dolores, re
                    </p>
                  </div>
                </div>
              </section>
              <section className="informacao">
                <div className="conteudo">
                  <img src="#" alt="icone" />
                  <div className="text">
                    <h2>Web Design</h2>
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
            <h1>Futuras Ideias</h1>
            <div className="coluna">
              <section className="informacao">
                <div className="blocos">
                  <div className="blocoMaior">
                    <img src="#" alt="Algo" />
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
                    <img src="#" alt="Algo" />
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
            <h1>Tecnologias</h1>
            <div className="coluna">
              <img src="#" alt="technology" />
              <img src="#" alt="technology" />
              <img src="#" alt="technology" />
              <img src="#" alt="technology" />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;
