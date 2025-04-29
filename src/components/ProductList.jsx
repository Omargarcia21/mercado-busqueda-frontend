import React from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import '../styles/ProductList.css'

// Componente que recibe opcionalmente un prop `query` pero usa principalmente datos desde la navegación
const ProductList = ({ query }) => {
  // Obtenemos los productos y la búsqueda desde el estado de navegación
  const { state } = useLocation();
  const navigate = useNavigate();
  
  // Función para navegar a la vista de detalles de un producto
  const handleViewDetails = (product) => {
    navigate(`/product/${product.id}`, { state: { product } });
  };

  return (
    <div className="results-container">
      <h2>Resultados para: {state?.searchQuery}</h2>
      <div className="products-grid">
        {state?.products?.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.thumbnail} alt={product.title} />
            <div className="products-info">
              <h3>{product.title}</h3>
              <p>Precio: ${product.price}</p>
              <button 
                onClick={() => handleViewDetails(product)} 
                className="btn-details"
              >
                Ver detalles
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;