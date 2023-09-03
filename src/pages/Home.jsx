
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Loader } from 'components/Loader/Loader';
import { useEffect, useState } from "react";
import { useLocation, NavLink } from 'react-router-dom';
import {getTrendingList} from '../API/API';


const Home =  () =>{
    const[trendingMovies, setTrendingMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const location = useLocation(); 

    useEffect(() => {
      
    const fetchMoviesList = async () => {
    try{  
        setIsLoading(true);
        const response = await getTrendingList('/trending/all/day?language=en-US')
        setTrendingMovies(response.results);

    }catch (error){
        console.log(error);
        toast.error('Something went wrong!', {
          icon: '🤯',
        });
    }finally{
         setIsLoading(false);
    }
    }
    fetchMoviesList();
    }, [])
  
    return ( 
        <main> 
          <h1>Trending today</h1> 
          <ul> 
            {trendingMovies.map(movie => ( 
              <li key={movie.id}> 
                <NavLink to={`/movies/${movie.id}`} state={{ from: location }}> 
                  {movie.original_title || movie.name} 
                </NavLink> 
              </li> 
            ))} 
            {isLoading && <Loader />} 
          </ul> 
        </main> 
      ); 
}; 


export default Home;