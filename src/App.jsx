import './App.css'
import { Banner } from './components/Banner'
import {FormularioDeEvento} from './components/FormularioDeEvento' 
import { Tema } from './components/Tema'
import { Card } from './components/Card'
import { useState } from 'react'

function App() {

  const temas = [
    {id: 1, nome: 'front-end'},
    {id: 2, nome: 'back-end'},
    {id: 3, nome: 'cloud'},
    {id: 4, nome: 'inteligencia artificial'},
    {id: 5, nome: 'devops'},
    {id: 6, nome: 'data science'}
  ]

  const [eventos, setEventos] = useState([
    {
      capa: 'https://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_1.png',
      tema: temas[0],
      data: new Date(),
      titulo: 'Mulheres no Front'
    }
  ])

  function adicionarEvento(evento){
    setEventos([...eventos, evento])
  }

  return (
    <main>
      <header>
        <img src='/logo.png' alt='Logo'></img>
      </header>
      <Banner />
      <FormularioDeEvento temas={temas} aoSubmeter={adicionarEvento}/>
      <section className="container">
        {temas.map((tema) => {
          if(!eventos.some(function(evento){
            return evento.tema.id == tema.id
          })){
            return null
          }
          return (
            <section key={tema.id}>
              <Tema tema={tema}/>
              <div className="eventos">
                {eventos
                .filter((evento) => {
                  return evento.tema.id == tema.id
                })
                .map((evento, index) => {
                  return <Card evento={evento} key={index}/>
                })}
              </div>
            </section>
          )
        })}
      </section>
    </main>
  )
}

export default App
