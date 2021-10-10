
import {
  deleteIdCart,
  getCart,
  postAddCart,
  putMovies,
  
} from "../../service/serviceBuyMovie";
import { types } from "../types/types";

export const axiosMovies = () => {
  return async (dispatch) => {
    await getCart().then((res) => {
      dispatch({
        type: types.GET_BASE,
        payload: res.data,
      });
    });
  };
};
export const axiosPostMovies = (movies) => {
  return async (dispatch) => {
    await postAddCart(movies).then((res) => {
      dispatch({
        type: types.POST_BASE,
        payload:[ res.data],
      });
    });
  };
};

export const axiosPutMovies = (id, update) => {
  return async (dispatch) => {
    await putMovies(id, update).then((res) =>
      dispatch({
        type: types.PUT_BASE,
        payload:[ res.data],
      })
    )
    .catch( error => {
      console.error( 'Put no va: ', error )
    })
  };
};


export const axiosDelMovies = (id)=>{
  return async (dispatch) => {
    await deleteIdCart(id).then((res) => {
      dispatch({
        type: types.DEL_BASE,
        payload: [res.id],
      });
    })
    .catch( error => {
      console.error( 'función enRechazo invocada: ', error )
    })
  }; 

}
