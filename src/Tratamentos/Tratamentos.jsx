import "./Tratamentos.css";

export default function Procedimentos() {
    return (
        <div className="tratamentos">
            <div className="left">
                <img src="/procedimentos.png" alt="Procedimentos de estética" className="imagem-procedimentos" />
            </div>
            <div className="right">
                <h2>Tratamentos</h2>
                <ul className="lista-tratamentos">
                    <li>Gordura Localizada</li>
                    <li>Redução de Medidas</li>
                    <li>Flacidez Tissular / Muscular</li>
                    <li>Estrias</li>
                    <li>Clareamento Axila</li>
                    <li>Olheiras</li>
                </ul>
            </div>
            
        </div>
    );
}
