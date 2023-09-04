import { Loader } from "components/Loader/Loader";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getTrendingList} from "../API/API";
import { MovieCard } from "components/MovieCard/MovieCard";
import { SearchBar } from "components/SearchBar/SearchBar";
import { useState, useEffect } from "react";

const Movies = () => {
    const [query, setQuery] = useState('');
    const [movieList, setMovieList] = useState([]);
    const [page, setPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);

      

    useEffect(() => {
        const loadResult = async (query, page) => {
          try {
            setIsLoading(true);
            const movie = await  getTrendingList(query, page);
            if (movie && movie.results && movie.results.length) { 
                setMovieList(prevMovies =>
                  page > 1 ? [...prevMovies, ...movie.results] : movie.results
                );
               
    
              setIsLoading(false);
            } else {
                toast.error('Movies are not found!', {
                    icon: '🤯',
                  });
              setIsLoading(false);
            }
          } catch (error) {
            console.log(error);
          } finally {
            setIsLoading(false);
          }
        };
    
        if (query && page) {
          loadResult();
        }
      }, [query, page]);

      const handleSubmit = newQuery => {
        if (!newQuery) {
          return;
        }
        setQuery(newQuery);
        setPage(1);
      };
    
      return (
        <div>
          <SearchBar onSubmit={handleSubmit} />
          <MovieCard movieList={movieList} />
          {isLoading && <Loader />}
        </div>
      );
   
    
}



export default Movies;