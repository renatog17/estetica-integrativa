import './Rodape.css';

export default function Rodape() {
    return (
        <footer className="rodape">
            <p>&copy; {new Date().getFullYear()} D&C Estética. Todos os direitos reservados.</p>
            <div className="links">
                <a href="#">Política de Privacidade</a>
                <a href="#">Termos de Uso</a>
                <a href="#">Contato</a>
            </div>
            <p className='autor'>
                Feito por <a href="https://renatog17.github.io/renatopage/" target="_blank" rel="noopener noreferrer">Renato Oliveira</a>
            </p>

        </footer>
    );
}
