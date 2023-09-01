import { Link } from "react-router-dom"

export const MovieList = ({movies}) =>{
   const title = 'Trending today'
    return(
        <div> 
            <h1>{title}</h1>
            {movies.map(movie => {
                const {id, title} = movie
                return(
                    <div key={id}>
                        <ul>
                            <li>
                                 <Link to={`/movies/${id}`}>{title}</Link>
                            </li>
                        </ul>
                   
                    </div>
                )
            })}
        </div>
    )
}