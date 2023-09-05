import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes } from "react-router-dom";
import { NavLink } from 'react-router-dom';

import Home from "pages/Home";
import Movies from "pages/Movies";
import MovieDetails from 'pages/MovieDetails';
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';

// import SharedLayout  from 'components/Layout/Layout';
// import { Container, Header, Link } from './Layout.styled';




export const App = () => {
  return (
    <div>
        <div>
          <header>
            <nav>
              <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="movies">Movies</NavLink>
              </li>
            </ul>
            </nav>
          </header>
       </div>
       <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/movies" element={<Movies/>}/>
        <Route path="/movies/:movieId" element={<MovieDetails/>}>
           <Route path="cast" element={<Cast/>}/>
           <Route path="reviews" element={<Reviews/>}/>
        </Route>
        <Route path="*" element={<div>404 Not Found</div>}/>
      </Routes>
      <ToastContainer />
    </div>
  );
};


