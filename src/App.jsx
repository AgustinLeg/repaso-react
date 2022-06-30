// import { useState } from 'react'

import { useState } from 'react'
import './App.css'
import { watchList as listaWatchList } from './assets/watchlist'
import { Collapse } from './components/Collapse'
import { WatchList } from './components/WhatchList'
// const initialValue = () => 10

function App() {
  const [list, setList] = useState(listaWatchList)
  // const [contador, setContador] = useState(initialValue)

  // console.log('nuevo render')

  // let contador = 10

  // const increment = () => {
  //   setContador(contador + 1)
  // }

  // version 2 modificando el array global
  const toggleWatched = (id) => {
    const mapedArr = list.map((item) => {
      if (item.id === id) {
        item.isWatched = !item.isWatched
        item.description = `${item.description} - Ya vi esta pelicula`
      }
      return item
    })
    setList(mapedArr)
  }

  return (
    <div className="container">
      {/* <h1>{contador}</h1>
      <button
        onClick={() => {
          increment()
        }}
      >
        Sumar
      </button> */}
      <Collapse label={'Qué debo hacer para utilizar estado en React?'}>
        <h2 className="title">esto es la respuesta a la pregunta 1</h2>
        <div>
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
          </ul>
        </div>
      </Collapse>
      <Collapse label={'Ejemplo 2 del collapse'}>
        {listaWatchList.map((item) => (
          <WatchList key={item.id} item={item} toggleWatched={toggleWatched} />
        ))}
      </Collapse>
    </div>
  )
}

export default App
