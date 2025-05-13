import "./Procedimentos.css";

export default function Procedimentos() {
    return (
        <div className="procedimentos">
            <div className="left">
                <h2>Procedimentos</h2>
                <ul className="lista-procedimentos">
                    <li>Botox</li>
                    <li>Bioestimulador de Colágeno</li>
                    <li>Limpeza de Pele</li>
                    <li>Microvasos (PEIM)</li>
                    <li>Preenchimento Labial</li>
                    <li>Definição Abdominal</li>
                    <li>Remodelamento Glúteo</li>
                </ul>
            </div>
            <div className="rigth">
                <img src="/procedimentos.png" alt="Procedimentos de estética" className="imagem-procedimentos" />
            </div>
        </div>
    );
}
