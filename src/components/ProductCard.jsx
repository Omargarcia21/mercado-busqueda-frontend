import '../styles/ProductCard.css'
import React from "react";
import { useLocation, useNavigate } from 'react-router-dom';

const ProductCard = () => {
  // Obtenemos el estado enviado desde la navegación (producto seleccionado)
  const { state } = useLocation();
  const product = state?.product;
  const navigate = useNavigate();

  // Si no hay producto recibido, mostramos mensaje
  if (!product) return <p>Producto no encontrado</p>;

  // Función para volver atrás
  const handleBack = () => {
    navigate(-1); 
  };

  return (
    <div className="product-detail-container">
    {/* Imagen del producto */}
      <img src={product.thumbnail} alt={product.title} className="product-detail-img" />
      {/* Información del producto */}
      <div className="product-info">
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <h3>Precio: ${product.price}</h3>
        <button  onClick={handleBack} className='btn-secondary'>Atras</button>
      </div>
    </div>
  );
};

export default ProductCard;