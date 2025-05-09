import React from "react";
import "./Hero.css";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const palavras = [
  "Saúde",
  "Estética",
  "Bem-estar",
  "Autoestima",
  "Confiança",
  "Beleza",
];

const Hero = () => {
  const [indexPalavra, setIndexPalavra] = useState(0);
  const [texto, setTexto] = useState("");
  const [apagando, setApagando] = useState(false);

  useEffect(() => {
    const palavraAtual = palavras[indexPalavra];

    let intervalo;

    if (apagando) {
      intervalo = setTimeout(() => {
        setTexto((prev) => prev.slice(0, -1));
      }, 100);
    } else {
      intervalo = setTimeout(() => {
        setTexto((prev) => palavraAtual.slice(0, prev.length + 1));
      }, 150);
    }

    if (!apagando && texto === palavraAtual) {
      setTimeout(() => setApagando(true), 1500);
    }

    if (apagando && texto === "") {
      setApagando(false);
      setIndexPalavra((prev) => (prev + 1) % palavras.length);
    }

    return () => clearTimeout(intervalo);
  }, [texto, apagando, indexPalavra]);

  return (
    <div className="hero">
      <div className="left">
        <div className="logo">
          <p className="texto-logo">Estética Integrativa</p>
          <p className="assinatura">Cris S.</p>
        </div>
        <img
          src="/cris.png"
          className="hero-image"
          alt="Imagem de Cris"
        />
      </div>
      <div className="center">
        <div className="text-before-palavra-dinamica">Viva com mais</div>

        <span className="palavra-dinamica">{texto}</span>

        <div className="buttons">
          <div className="avaliacao">Agende Uma Avaliação</div>
          <div className="sobre">Saiba Mais</div>
        </div>
      </div>
      <div className="rigth">
        <div className="seus-agendamentos">
          Seus Agendamentos
        </div>
        <div className="social">
          <a
            href="https://wa.me/+557188873010"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faWhatsapp} size="3x" />
          </a>
          <a
            href="https://instagram.com/cs_esteticaintegrativa"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} size="3x" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
