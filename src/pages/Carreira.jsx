import React from "react";
import Card from "../components/Card";
import "./Carreira.css";
import IconeImg from "../iconeImg.svg";

const Carreira = () => {
  return (
    <div>
      <Card />
      <main className="career-container">
        <section className="career-section">
          <div className="linha-carreira">
            <h1>Carreira</h1>
            <div className="barra"></div>
          </div>
          <div className="section-header">
            <div className="icon-wrapper">
              <img src={IconeImg} alt="icone" className="section-icon" />
            </div>
            <h3 className="section-title">Educação</h3>
          </div>

          <ol className="timeline-list">
            <li className="timeline-item">
              <h4 className="item-title">Atitus Educação</h4>
              <span className="item-period">2024 — 2028</span>
              <p className="item-description">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
                quibusdam deleniti expedita maiores tempore quas repellat
                asperiores voluptatum. Provident sed quas officia voluptatibus!
                Molestias dolorum ipsam blanditiis? At, obcaecati dolore.
              </p>
            </li>
            <li className="timeline-item">
              <h4 className="item-title">Senac RS</h4>
              <span className="item-period">2022 — 2023</span>
              <p className="item-description">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
                quibusdam deleniti expedita maiores tempore quas repellat
                asperiores voluptatum. Provident sed quas officia voluptatibus!
                Molestias dolorum ipsam blanditiis.
              </p>
            </li>
          </ol>
          <div className="linha">
            <h2>Minhas Habilidades</h2>
            <section className="informacao">
              <div className="skill">
                <h3>Web Design <span>80%</span></h3>
                <div className="barra-interativa">
                  <div id="barra1-porcento"></div>
                </div>
              </div>
              <div className="skill">
                <h3>Branding <span>90%</span></h3>
                <div className="barra-interativa">
                  <div id="barra2-porcento"></div>
                </div>
              </div>
              <div className="skill">
                <h3>WordPress <span>40%</span></h3>
                <div className="barra-interativa">
                  <div id="barra3-porcento"></div>
                </div>
              </div>
              <div className="skill">
                <h3>Graphic Design <span>70%</span></h3>
                <div className="barra-interativa">
                  <div id="barra4-porcento"></div>
                </div>
              </div>
            </section>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Carreira;
