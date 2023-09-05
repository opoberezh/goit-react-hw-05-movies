import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getReviews } from "API/API";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Reviews = () => {
    const {movieId} = useParams();
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const fetchReviews = async () => {
            try{
                const result = await getReviews(movieId)
                console.log(result);
                setReviews(result);
            } catch (error) { 
                toast.error('Reviews is not found!', {
                        icon: '🤯',
                    });
                console.log(error);
            }
        };
    
        fetchReviews();
    }, [movieId]);
            
        
    return (
        <>
        <div>
            <h2>Movie Reviews</h2>
                <ul>
                    {reviews.map(review => (
                       <li key={review.id}>
                            <p>{review.author}</p>
                            <p>{review.content}</p>
                       </li> 
                    ))}
                </ul>
        </div>
        </>
    )
}

export default Reviews;