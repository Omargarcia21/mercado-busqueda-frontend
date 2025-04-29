// src/components/NoResults.jsx
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import '../styles/NoResults.css'
const NoResults = () => {
    const location = useLocation();
    const navigate = useNavigate();

     // Obtenemos el parámetro de búsqueda de la URL
    const searchParams = new URLSearchParams(location.search);
    const query = searchParams.get("search");

    // Función para volver a intentar la búsqueda
    const handleRetry = () => {
        if (query) {
            navigate(`/loader?search=${query}`);
        } else {
            navigate('/');
        }
    };
    return (
        <div className="no-results-container">
        <img
                src="https://cdn-icons-png.flaticon.com/512/7486/7486740.png"
                alt="No Results"
                className="no-results-img"
            />
        {query && (
            <p className="no-results-text">No se encontraron resultados para <strong>{query}</strong></p>
        )}
            <button className='btn-refresh' onClick={handleRetry}>🔁 Reintentar</button>
        </div>

    );
};

export default NoResults;
