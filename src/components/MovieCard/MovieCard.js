import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

 const MovieCard  = ({films}) => {
  const location = useLocation();
    // if(!films){
    //   return null;
    // }

  return (
    <>
      <ul>
        {films.map(movie => {
          return (
            <li key={movie.id}>
              <NavLink to={`/movies/${movie.id}`} state={{ from: location }} 
              cover={movie.poster_path}>
                {movie.original_title}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default MovieCard;