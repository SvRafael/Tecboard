import './App.css'
import { Banner } from './components/Banner'
import {FormularioDeEvento} from './components/FormularioDeEvento' 
import { Tema } from './components/Tema'
import { Card } from './components/Card'

function App() {

  const temas = [
    {id: 1, nome: 'front-end'},
    {id: 2, nome: 'back-end'},
    {id: 3, nome: 'cloud'},
    {id: 4, nome: 'inteligencia artificial'},
    {id: 5, nome: 'devops'},
    {id: 6, nome: 'data science'}
  ]

  const eventos = [
    {
      capa: 'https://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_1.png',
      tema: temas[0],
      data: new Date(),
      titulo: 'Mulheres no Front'
    }
  ]

  return (
    <main>
      <header>
        <img src='/logo.png' alt='Logo'></img>
      </header>
      <Banner />
      <FormularioDeEvento/>
      {temas.map((item) => {
        return (
          <section key={item.id}>
            <Tema tema={item}/>
            <Card evento={eventos[0]}/>
          </section>
        )
      })}
    </main>
  )
}

export default App
