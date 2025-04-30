import axios from "axios";

// Función para buscar productos usando el proxy backend
export const searchProducts = async (query) => {
  try {
    const proxyUrl =  `https://mercado-busqueda-backend.onrender.com/api/search?q=${encodeURIComponent(query)}&limit=3`;
    const response = await axios.get(proxyUrl);

    return response.data.map(item => ({
      id: item.id,
      title: item.name,
      price: null, 
      thumbnail: item.pictures && item.pictures.length > 0 ? item.pictures[0].url : null
    }));
  } catch (error) {
    console.error("Error al buscar productos:", error);
    throw new Error("No se pudieron obtener productos desde el proxy.");
  }
};