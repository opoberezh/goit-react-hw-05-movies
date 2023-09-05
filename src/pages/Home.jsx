
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Loader } from 'components/Loader/Loader';
import { lazy, useEffect, useState } from "react";
// import { useLocation } from 'react-router-dom';
import {getTrendingList} from '../API/API';
const MovieCard = lazy(() => import ('components/MovieCard/MovieCard'));


const Home =  () =>{
    const[trendingMovies, setTrendingMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    // const location = useLocation(); 

    useEffect(() => {
      
    const fetchMoviesList = async () => {
    try{  
        setIsLoading(true);
        const movies = await getTrendingList(); setTrendingMovies(movies);

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
           {isLoading ? (
          <Loader /> 
        ) : (
          <MovieCard films={trendingMovies} /> 
        )} 
          </ul> 
        </main> 
      ); 
}; 


export default Home;