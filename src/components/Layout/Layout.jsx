import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Header, Link } from './Layout.styled';
import { Loader } from 'components/Loader/Loader';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FcHome, FcFilmReel } from "react-icons/fc";


 const Layout = () => {
    return (
      <Container>
        <Header>
          <nav>
            <ul>
              <li>
                <Link to="/">
                  <FcHome size={32} /></Link>
              </li>
              <li>
                <Link to="/movies"><FcFilmReel size={32}/></Link>
              </li>
            </ul>
          </nav>
        </Header>
        <main>
          <Suspense fallback={<Loader/>}>
            <Outlet />
          </Suspense>
        </main> 
        <ToastContainer/>
      </Container>
      
    );
  };

export default Layout;