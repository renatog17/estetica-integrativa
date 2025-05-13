import { useState } from 'react';
import './CarouselAvaliacoes.css';

const avaliacoes = [
  {
    nome: 'Ambiente Acolhedor',
    depoimento: 'Atendimento excelente! Saí super satisfeita com os resultados. Atendimento excelente! Saí super satisfeita com os resultados. Atendimento excelente! Saí super satisfeita com os resultados. Atendimento excelente! Saí super satisfeita com os resultados. ',
  },
  {
    nome: 'Profissionais Experientes',
    depoimento: 'Profissionais incríveis. Voltarei com certeza! Profissionais incríveis. Voltarei com certeza! Profissionais incríveis. Voltarei com certeza! Profissionais incríveis. Voltarei com certeza!',
  },
  {
    nome: 'Melhor do Trobogy',
    depoimento: 'Ambiente acolhedor e ótimo resultado. Recomendo! Ambiente acolhedor e ótimo resultado. Recomendo! Ambiente acolhedor e ótimo resultado. Recomendo! Ambiente acolhedor e ótimo resultado. Recomendo!',
  },
];

export default function CarouselAvaliacoes() {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((index - 1 + avaliacoes.length) % avaliacoes.length);
  const next = () => setIndex((index + 1) % avaliacoes.length);

  return (
    <div className="carousel-container">
      <button onClick={prev} className="nav-button">‹</button>
      <div className="card">
        <div className="titulo">{avaliacoes[index].nome}</div>
        <div className="depoimento">{avaliacoes[index].depoimento}</div>
      </div>
      <button onClick={next} className="nav-button">›</button>
    </div>
  );
}
