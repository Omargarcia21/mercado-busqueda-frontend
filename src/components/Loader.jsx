import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { searchProducts } from "../services/api.js"; // Asegúrate de importar tu función
import '../styles/Hamster-style.css';
import '../styles/Loader.css'

const Loader = () => {
  // Estado para controlar la carga y errores
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // Hooks de React Router para obtener la búsqueda y navegar
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Mínimo tiempo para mostrar el loader (3 segundos)
    const minLoadTime = 3000;
    const startTime = Date.now();
    const searchParams = new URLSearchParams(location.search);
     // Extraemos el término de búsqueda
    const query = searchParams.get('search');

    // Si no hay término de búsqueda, redirigimos al inicio
    if (!query) {
      navigate('/');
      return;
    }

    const fetchProducts = async () => {
      try {
        setLoading(true);
         // Buscamos productos con el término dado
        const results = await searchProducts(query);
        
         // Si no hay resultados, redirigimos a página de no resultados
        if (!results || results.length === 0) {
          navigate(`/no-results?search=${query}`);
        } else {
          // Si hay resultados, redirigimos al componente ProductList y pasamos los datos
          navigate(`/results`, { 
            state: { 
              products: results,
              searchQuery: query 
            } 
          });
        }
      } catch (err) {
        // Si ocurre un error lo guardamos en el estado
        setError(err.message);
      } finally {
        // Aseguramos que el loader se muestre al menos 3 segundos
        const elapsed = Date.now() - startTime;
        if(elapsed < minLoadTime) {
          await new Promise(resolve => setTimeout(resolve, minLoadTime - elapsed));
        }
        setLoading(false);
      }
    };

    fetchProducts();
  }, [location.search, navigate]);

   // Si hay error, mostramos un mensaje y opción de reintentar
  if (error) {
    return (
      <div className="loader-error-container">
        <p className="loader-error-message">Error: {error}</p>
        <button 
          onClick={() => window.location.reload()}
          className="loader-retry-button"
        >
          Reintentar
        </button>
      </div>
    );
  }

  // Animación del hamster (Loader)
  return (
    <div className="loader-container">
      <div
        aria-label="Orange and tan hamster running in a metal wheel"
        role="img"
        className="wheel-and-hamster"
      >
        <div className="wheel"></div>
        <div className="hamster">
          <div className="hamster__body">
            <div className="hamster__head">
              <div className="hamster__ear"></div>
              <div className="hamster__eye"></div>
              <div className="hamster__nose"></div>
            </div>
            <div className="hamster__limb hamster__limb--fr"></div>
            <div className="hamster__limb hamster__limb--fl"></div>
            <div className="hamster__limb hamster__limb--br"></div>
            <div className="hamster__limb hamster__limb--bl"></div>
            <div className="hamster__tail"></div>
          </div>
        </div>
        <div className="spoke"></div>
      </div>
      <p className="title-loader">Buscando productos...</p>
    </div>
  );
};

export default Loader;