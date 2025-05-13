import CarouselAvaliacoes from '../CarouselAvaliacoes/CarouselAvaliacoes'
import './ProvaReal.css'

export default function ProvaReal(){
    return(
        <div className='provareal'>
                <header className="faixa">
                    <span>Experiência com D&C</span>
                    <span className="estrelas">★★★★★</span>
                </header>
                <div className="prova-real">
                    <CarouselAvaliacoes></CarouselAvaliacoes>
                    <img src='./tratamentos.png'></img>
                </div>
        </div>
    )
}

