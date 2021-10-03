import React from "react";
import { useDispatch } from "react-redux";
import { useHookGetId } from "../hooks/useHookGetId";
import {
  axiosPostMovies,
  axiosPutMovies,
} from "../redux-thunk/accions/rootAcion";

import "../css/AppBtn.css";

export const BtnAddToCart = ({ movie, amount, setAmount }) => {
  const [detail] = useHookGetId();
  const dispatch = useDispatch();
  const id = movie.find((id) => id.mal_id === detail.mal_id);
  const detailsObject = {
    price: detail.score * 2,
    foto: detail?.image_url,
    mal_id: detail.mal_id,
    amount:amount +1
  };
  
  const update = {
    ...detailsObject,
    amount : id?.amount + amount
  };
  console.log(amount)


  console.log ( update);
  
  const addToCart = () => {
    if (id?.mal_id === detailsObject.mal_id) {
      setAmount( (prevAmount) => prevAmount = prevAmount +1)
      dispatch(axiosPutMovies(id.id, update));
    } else {
     
      dispatch(axiosPostMovies(detailsObject));
    }
  };

  return (
    <div>
      <button className="btn btn-add" onClick={addToCart}>
        Añadir al carrito
      </button>
    </div>
  );
};
