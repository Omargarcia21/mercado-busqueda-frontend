import './App.css'
import logoMercadoLibre from './assets/mercadolibre.svg';
import cuponera from './assets/cuponera.jpg'
import cellphone from './assets/celphone.jpg'
import { Link, Outlet } from "react-router-dom";
import SearchBar from './components/SearchBar';

function App() {
  return (
    <>
      {/* Barra de navegación principal */}
      <nav className="navbar">
        <div className="navbar__container">
          {/* Logo con link a la página principal */}
          <Link to="/" className="navbar__logo">
            <img src={logoMercadoLibre} alt="Logo" className="navbar__logo-img" />
          </Link>
          {/* Barra de búsqueda */}
          <SearchBar />
        </div>
      </nav>

      {/* Espacio para renderizar rutas hijas usando React Router */}
      <Outlet />

      {/* Contenido principal de la página */}
      <main className="main-container">
        <h1 className='title'>
          Bienvenido a Mercado Libre, aquí puedes buscar lo que necesitas
        </h1>
        
        {/* Imágenes del home */}
        <div className='images-container'>
          <img src={cuponera} className="content-image"/>
          <img src={cellphone} className="content-image"/>
        </div>
      </main>
    </>
  )
}

export default App;