import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes } from "react-router-dom";

import Home from "pages/Home";
import Movies from "pages/Movies";
import { Layout } from 'Layout';




export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout/>}/>
        <Route index element={<Home/>}/>
        <Route path="/movies" element={<Movies/>}/>
        <Route path="movies/:movieId" element={<div>MovieDetails</div>}/>
        <Route path="casts" element={<div>Casts</div>}/>
        <Route path="reviews" element={<div>Reviews</div>}/>
        <Route path="*" element={<div>404 Not Found</div>}/>
      </Routes>
      <ToastContainer />
    </div>
  );
};


// import styled from 'styled-components';
// import { NavLink } from "react-router-dom";

// export const Container = styled.div`
// max-width: 1300px;
// margin: 0 auto;
// padding: 0 16px;
// `;

// export const Header = styled.header`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   gap: 12px;
//   padding: 8px 0;
//   margin-bottom: 16px;
//   border-bottom: 1px solid black;

//   > nav {
//     display: flex;

//   }
// `;

// export const Link = styled(NavLink)`
//   padding: 8px 16px;
//   border-radius: 4px;
//   text-decoration: none;
//   color: black;
//   font-weight: 500;

//   &.active {
//     color: orangered;
//   }
// `;