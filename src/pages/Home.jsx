import "./Home.css";
import React from "react";
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
  return (
    <div className="container">
      <aside>
        <div className="canto">
          <button className="btn-canto">
            <img src={setinha} />
          </button>
        </div>
        <div className="content">
          <div className="caixaPerfil">
            <img src={logo} alt="Foto perfil" />
          </div>
          <div className="texto">
            <h1>Bernardo Heckler</h1>
            <p className="caixaDev">Front End Dev</p>
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
                  <p>1/10/2022</p>
                </div>
              </div>
              <div className="informacoes">
                <div className="caixaImg">
                  <img src={IconeLocal} alt="icone local" />
                </div>
                <div className="textoLinks">
                  <p className="subText">Local</p>
                  <p>
                    Brazil, Rio Grande do Sul
                  </p>
                </div>
              </div>
            </div>
            <div className="barraLinha"></div>
            <div className="iconesSociais">
              <img src={iconeX} alt="icone Twitter" />
              <img src={iconeFigma} alt="icone Figma" />
              <img src={iconeGitHub} alt="icone Git Hub" />
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Home;
