import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
export const MovieCard = ({ movieList }) => {
  const location = useLocation();
  return (
    <main>
      <ul>
        {movieList.map(movie => (
          <li key={movie.id}>
            <NavLink to={`/movies/${movie.id}`}
            state={{from: location}}
            cover={movie.poster_path}>
            </NavLink>
          </li>
        ))}
      </ul>
    </main>
  );
};