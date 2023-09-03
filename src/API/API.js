import axios from "axios";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const API_KEY = 'f43d97ced2e0df62c7abbc5753de631a';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';
// axios.defaults.headers.common['Authorization'] = API_KEY;
 const options  = {
      headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNDNkOTdjZWQyZTBkZjYyYzdhYmJjNTc1M2RlNjMxYSIsInN1YiI6IjY0ZjFmYjVmOTdhNGU2MDBjNDg3NTdjNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.puc1vDnfiaV3ioqkSALLlCHrh3M3-0ihKl93ZbIhyB0'
    }
  };
const params = {
    key: API_KEY,
}

export const  getTrendingList = async () =>{
   
    try{
        const response = await axios.get(`/trending/movie/day?language=en-US`, options, params);
        console.log(response)
        if (response){
            const data = response.data
        console.log(data);
        return data;
        }else{
            throw new Error("Empty response");
        }
       
    }catch (error) {
        console.log(error);
        toast.error('Something went wrong!', {
          icon: '🤯',
        });
        return undefined;
    }
} 


