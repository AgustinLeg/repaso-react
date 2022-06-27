import Boton from './components/Boton'
import Card from './components/Card'
import './index.css'

const App = () => {
  return (
    <>
      <h1 className="title">titulo</h1>

      <Boton texto="boton desde props" class="btn-red" />
      <Boton texto="boton 2" class="btn-blue" />
      <label htmlFor="texto">Input texto</label>
      <input type="text" id="texto" />
      <button className="btn">boton en app</button>
      <Card />
    </>
  )
}

// export {App} === export const App

// export default
export default App
