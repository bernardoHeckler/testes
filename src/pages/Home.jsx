import React, { useState } from "react"; // Importe o useState
import "./Home.css";
import setinha from "../setinha.svg";
import logo from "../logo.svg";
import emailSvg from "../iconeEmail.svg";
import iconeTelefone from "../iconeTelefone.svg";
import iconeAgenda from "../iconeAgenda.svg";
import IconeLocal from "../iconeLocal.svg";
import iconeX from "../iconeTwitter.svg";
import iconeFigma from "../iconeFigma.svg";
import iconeGitHub from "../iconeGitHub.svg";

const Home = () => {
  const [mostrar, setMostrar] = useState(false);
  const alterar = () => {
    setMostrar(!mostrar); // vai trocar de true para false e vice versa
  };

  return (
    <div className="container">
      <aside>
        {/* Só mostra o botão superior quando o conteúdo estiver escondido */}
        {!mostrar && (
          <div className="canto">
            <button className="btn-canto" onClick={alterar}>
              <img src={setinha} alt="Mostrar conteúdo" />
            </button>
          </div>
        )}
        <div className={`content-acima ${!mostrar ? "compacto" : ""}`}>
          <div className={`caixaPerfil ${mostrar ? "expandido" : ""}`}>
            <img
              className={`tamanhoFoto ${mostrar ? "expandido" : ""}`}
              src={logo}
              alt="Foto perfil"
            />
          </div>
          <div className="texto">
            <h1>Bernardo Heckler</h1>
            <p className="caixaDev">Front End Dev</p>
          </div>
        </div>
        {mostrar && (
          // rederizando mostrar = true.
          <>
            <div className="content-abaixo">
              <div className="barraLinha"></div>
              <div className="links">
                <div className="informacoes">
                  <div className="caixaImg">
                    <img src={emailSvg} alt="Carta Email" />
                  </div>
                  <div className="textoLinks">
                    <p className="subText">EMAIL</p>
                    <a href="mailto:bernaheckler1@gmail.com">
                      bernaheckler1@gmail.com
                    </a>
                  </div>
                </div>
                <div className="informacoes">
                  <div className="caixaImg">
                    <img src={iconeTelefone} alt="icone telefone" />
                  </div>
                  <div className="textoLinks">
                    <p className="subText">Phone</p>
                    <a href="tel:+54996418356">(54) 9 9641-8356</a>
                  </div>
                </div>
                <div className="informacoes">
                  <div className="caixaImg">
                    <img src={iconeAgenda} alt="icone agenda" />
                  </div>
                  <div className="textoLinks">
                    <p className="subText">Programmig Since</p>
                    <p>1/11/2022</p>
                  </div>
                </div>
                <div className="informacoes">
                  <div className="caixaImg">
                    <img src={IconeLocal} alt="icone local" />
                  </div>
                  <div className="textoLinks">
                    <p className="subText">Local</p>
                    <p>Brazil, Rio Grande do Sul</p>
                  </div>
                </div>
              </div>
              <div className="barraLinha"></div>
              <div className="iconesSociais">
                <a
                  href="https://x.com/bhcklr"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={iconeX} alt="Meu Twitter" />
                </a>
                <a
                  href="https://www.figma.com/proto/P0Y51G1NX5v0McdR0160v0/apple-design-portfolio?page-id=23%3A1095&node-id=54-716&p=f&viewport=741%2C260%2C0.35&t=5K9qyUGlczwvKwLV-1&scaling=scale-down-width&content-scaling=fixed"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={iconeFigma} alt="Meu Figma" />
                </a>
                <a
                  href="https://github.com/bernardoHeckler/testes"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={iconeGitHub} alt="Meu Git Hub" />
                </a>
              </div>
            </div>
            <div className="canto-baixo">
              <button className="btn-canto-invertido" onClick={alterar}>
                <img src={setinha} alt="Botão Alterar" />
              </button>
            </div>
          </>
        )}
      </aside>
    </div>
  );
};

export default Home;
