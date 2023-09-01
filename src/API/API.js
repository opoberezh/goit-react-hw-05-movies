import axios from "axios";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const API_KEY = '964b4add978881dbde6dac53eef007fa';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.headers.common['Authorization'] = API_KEY;
const options  = {
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer 964b4add978881dbde6dac53eef007fa'
    }
  };

export const  getTrendingList = async endpoin =>{
    try{
        const response = await axios.get(`${endpoin}`, options);
       const data = response.data
        console.log(data)
        return data;
    }catch (error) {
        console.log(error);
        toast.error('Something went wrong!', {
          icon: '🤯',
        });

    }
} 


