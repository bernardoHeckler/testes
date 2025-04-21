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
    <div>
      <aside>
        <div className="canto">
          <button className="btn-canto">
            <img src={setinha} />
          </button>
        </div>
        <div className="content">
          <img src={logo} alt="Foto perfil" />
          <div className="texto">
            <h1>Bernardo Heckler</h1>
            <div className="caixaDev">
              <p>FrontEnd Dev</p>
              <div className="barraLinha"></div>
              <div className="links">
                <div className="informacoes">
                  <div className="caixaImg">
                    <img src={emailSvg} alt="Carta Email" />
                  </div>
                  <div className="textoLinks">
                    <p>EMAIL</p>
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
                    <p>Phone</p>
                    <a href="tel:+00000000000">(00) 0 0000-0000</a>
                  </div>
                </div>
                <div className="informacoes">
                  <div className="caixaImg">
                    <img src={iconeAgenda} alt="icone agenda" />
                  </div>
                  <div className="textoLinks">
                    <p>Aniver</p>
                    <p>xx/xx/2025</p>
                  </div>
                </div>
                <div className="informacoes">
                  <div className="caixaImg">
                    <img src={IconeLocal} alt="icone local" />
                  </div>
                  <div className="textoLinks">
                    <p>Local</p>
                    <p>
                      Brazil, <br />
                      São Paulo
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
        </div>
      </aside>
    </div>
  );
};

export default Home;
