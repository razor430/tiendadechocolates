import './App.css'
import Layout from './components/layouts/Layout'
import ItemListContainer from './components/products/ItemListContainer'
import { Routes, Route } from 'react-router-dom'
import DetalleProducto from './components/products/DetalleProducto'
import Home from './pages/Home'
import Carrito from './pages/Carrito'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/productos' element={<ItemListContainer/>} />
        <Route path='/producto/:id' element={<DetalleProducto/>} />
        <Route path='/carrito' element={<Carrito/>} />
      </Routes>
      <Layout />
    </>
  )
}

export default App
