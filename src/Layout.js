import Home from "pages/Home";
import Movies from "pages/Movies";
import { NavLink, Outlet } from "react-router-dom"


export const Layout = () => {
    return(
        <div>
            <header>
                 <nav>
                <ul>
                    <li>
                        <NavLink to="/">{<Home/>}</NavLink>
                    </li>
                    <li>
                        <NavLink to="/movies">{<Movies/>}</NavLink>
                    </li>
                </ul>
            </nav>
            </header>
           
            <main>
                <Outlet/>
            </main>
        </div>
    );
};