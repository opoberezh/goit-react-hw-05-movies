import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes } from "react-router-dom";
import { NavLink } from 'react-router-dom';

import Home from "pages/Home";
import Movies from "pages/Movies";
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
        <Route path="/movies/:movieId" element={<div>MovieDetails</div>}>
           <Route path="casts" element={<div>Casts</div>}/>
           <Route path="reviews" element={<div>Reviews</div>}/>
        </Route>
        <Route path="*" element={<div>404 Not Found</div>}/>
      </Routes>
      <ToastContainer />
    </div>
  );
};


