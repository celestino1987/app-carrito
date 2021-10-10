import axios from "axios";

const URL = 'http://localhost:4200';
const MOVIES = 'MOVIES';




export const getCart = () => {
    return axios.get(`${URL}/${MOVIES}`);
  };

export const postAddCart = (movies) =>{

     return axios.post(`${URL}/${MOVIES}`,movies)
  }
  export const putMovies = (id,update) =>{

    return axios.put(`${URL}/${MOVIES}/${id}`,update)
  }
  export const deleteIdCart = (id) => {
    return axios.delete(`${URL}/${MOVIES}/${id}`);
  };
 
 ;