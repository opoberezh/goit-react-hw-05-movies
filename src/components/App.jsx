
import { Route, Routes } from "react-router-dom";
import { lazy } from 'react';
import Layout from '../components/Layout/Layout';

const Home = lazy (() => import ('../pages/Home'));
const Movies = lazy (() => import ('../pages/Movies'));
const MovieDetails = lazy (() => import ('../pages/MovieDetails')) ;
const Cast = lazy (() => import ('../components/Cast/Cast')) ;
const Reviews = lazy (() => import ( '../components/Reviews/Reviews'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}  exact>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<div>404 Not Found</div>}/>
      </Route>
    </Routes>
  );
};

 
