import './App.css'
import Hero from './Hero/Hero'
import Procedimentos from './Procedimentos/Procedimentos'
import Tratamentos from './Tratamentos/Tratamentos'
import ProvaReal from './ProvaReal/ProvaReal'
import NewsletterForm from './Contato/NewsletterForm'
import Rodape from './Rodape/Rodape'

function App() {
  return (
    <div>
      <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@600&family=Sacramento&family=Parisienne&display=swap" rel="stylesheet"/>
      <Hero></Hero>
      <Procedimentos></Procedimentos>
      <Tratamentos></Tratamentos>
      <ProvaReal></ProvaReal>
      <NewsletterForm></NewsletterForm>
      <Rodape></Rodape>
    </div>
  )
}

export default App
