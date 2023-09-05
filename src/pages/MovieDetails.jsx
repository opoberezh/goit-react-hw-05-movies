import { Loader } from 'components/Loader/Loader';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { HiArrowNarrowLeft } from 'react-icons/hi';
import { useState, useEffect, useRef, Suspense } from 'react';
import { Outlet, useParams, useLocation,  Link } from 'react-router-dom';
import {getMovieDetails} from '../API/API';

const MovieDetails = () => {
    const {movieId} = useParams();
    const [movieDetails, setMovieDetails] = useState({});
    const location = useLocation();
    const backLink = useRef(location.state?.from || '/');

    useEffect(()=> {
        const findingResult = async () => {
            try {
                const movie = await   getMovieDetails(movieId);   
                console.log(movie);
                setMovieDetails(movie)
              } catch (error) { 
                toast.error('Movie is not found!', {
                        icon: '🤯',
                      });
                console.log(error);
              }
            };
        
            findingResult();
          }, [movieId]);
    

     const {original_title
        , genres, overview, poster_path, vote_average} = movieDetails || {};
     const score = vote_average * 10; 
     const scoreToFixed = score.toFixed(2);

    return (
        <main>
            <button type="button">
                <Link to={backLink.current}>
                <HiArrowNarrowLeft size={24} />
                 Go back 
                </Link>
            </button>
            <div>
                <img
                src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                widrh={220}
                height={280}
                loading='lazy'
                alt='poster'/>
                <div>
                <h2>{original_title}</h2>
                <h3>User score: {scoreToFixed}%</h3>
                <h3>Overview</h3>
                <p>{overview} </p>
                <h3>Genres</h3>
                <ul>
                {genres && genres.length && genres.map(({ id, name }) => 
                     <li key={id}>
                    {name}
                    </li>
                )}
                </ul>
                </div>
            </div>
            <div>
                <h4>Additional information</h4>
                <ul>
                    <li>
                        <Link to='cast' state={{from: location}}>Cast</Link>
                    </li>
                    <li>
                        <Link to='reviews' state={{from: location}}>Reviews</Link>
                    </li>
                </ul>
            </div>
            <Suspense fallback={<Loader/>}>
             <Outlet/>   
            </Suspense>
            
        </main>
    );
}

export default MovieDetails;