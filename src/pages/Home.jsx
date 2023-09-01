
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from "react";
import { MovieList } from "components/MovieList/MovieList";
import {getTrendingList} from '../API/API';


const Home =  () =>{
    const[trendingMovies, setTrendingMovies] = useState([]);

    useEffect(() => {
    const fetchMoviesList = async () => {
    try{
        const response = await getTrendingList('/trending/movie/day?language=en-US')
        const data = response.data;
        setTrendingMovies(data.result);
    }catch (error){
        console.log(error);
        toast.error('Something went wrong!', {
          icon: '🤯',
        });
    }
    }
    fetchMoviesList();
    }, [])
  
        return (
            <div>
              
                <MovieList movies={trendingMovies}/>

            </div>
        )
}

export default Home;