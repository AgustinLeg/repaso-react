import ProductsList from './components/products/ProductsList'
import { AppLayout } from './components/layouts/AppLayout'

import './App.css'

// "pagina" home

function App() {
  return (
    <AppLayout>
      <h2 className="title">Clase repaso 27-06</h2>
      <ProductsList />
    </AppLayout>
  )
}

export default App
