import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

 const MovieCard  = ({films}) => {
  const location = useLocation();
    // if(!films){
    //   return null;
    // }
    const imgBaseUrl = 'https://image.tmdb.org/t/p/w300';
  return (
    <>
      <ul>
        {films.map(movie => {
          return (
            <li key={movie.id}>
              <NavLink to={`/movies/${movie.id}`} state={{ from: location }} 
              ><img src={imgBaseUrl + movie.poster_path}
                    width={140}
                    alt={movie.original_title} />
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