import axios from "axios";

const URL = 'http://localhost:4200';
const MOVIES = 'MOVIES';




export const getMovies = () => {
    return axios.get(`${URL}/${MOVIES}`);
  };

export const postMovies = (movies) =>{

     return axios.post(`${URL}/${MOVIES}`,movies)
  }
  export const putMovies = (id,update) =>{

    return axios.put(`${URL}/${MOVIES}/${id}`,update)
  }