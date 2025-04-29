import { React } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Loader from './components/Loader.jsx'
import ProductList from './components/ProductList.jsx'
import NoResults from './components/NoResults.jsx'
import ProductCard from './components/ProductCard.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
    {/* Ruta raíz que carga el componente App */}
      <Route path="/" element={<App />}>
      {/* Sub-rutas renderizadas en <Outlet /> dentro de App */}
        <Route path="loader" element={<Loader />} />
        <Route path="no-results" element={<NoResults />} />
        <Route path="results" element={<ProductList />} />
        <Route path="product/:id" element={<ProductCard />} />
      </Route>
    </Routes>
  </BrowserRouter>
)