import { PanoramaRounded } from "@material-ui/icons";
import {
  getMovies,
  postMovies,
  putMovies,
} from "../../service/serviceBuyMovie";
import { types } from "../types/types";

export const axiosMovies = () => {
  return async (dispatch) => {
    await getMovies().then((res) => {
      dispatch({
        type: types.GET_BASE,
        payload: res.data,
      });
    });
  };
};
export const axiosPostMovies = (movies) => {
  return async (dispatch) => {
    await postMovies(movies).then((res) => {
      dispatch({
        type: types.POST_BASE,
        payload: res.data,
      });
    });
  };
};

export const axiosPutMovies = (id, update) => {
  return async (dispatch) => {
    await putMovies(id, update).then((res) =>
      dispatch({
        type: types.PUT_BASE,
        payload: res.data,
      })
    );
  };
};
