import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/SearchBar.css'

function SearchBar() {
   // Estado para almacenar el texto de búsqueda
  const [query, setQuery] = useState('');
   // Hook para redireccionar rutas
  const navigate = useNavigate();

  // Manejador de envío del formulario
  const handleSubmit = (e) => {
    // Evita el comportamiento por defecto del formulario
    e.preventDefault();
    // Si está vacío, no hacer nada
    if (!query.trim()) return;
    // Redirige a la ruta "loader" con el término de búsqueda como parámetro
    navigate(`/loader?search=${encodeURIComponent(query.trim())}`);
  };

  return (
    <form onSubmit={handleSubmit} className="search-container">
      <input
        type="text"
        className='search-input'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Buscar producto..."
      />
      <button
        type="submit"
        className='search-button'
      >
        Buscar
      </button>
    </form>
  );
}

export default SearchBar; 