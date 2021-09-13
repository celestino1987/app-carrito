import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHookGetId } from "../hooks/useHookGetId";
import {
  axiosMovies,
  axiosPostMovies,
  axiosPutMovies,
} from "../redux-thunk/accions/rootAcion";
import { increment } from "../redux-thunk/accions/actionsCounter";

import "../css/AppBtn.css";

export const BtnAddToCart = ({ buy, setBuy ,movie,post}) => {
  const [detail] = useHookGetId();
  const dispatch = useDispatch();
console.log(post.id)
  let cantidad = 0;
  const detailsObject = {
    price: detail.score * 2,
    foto: detail?.image_url,
    mal_id: detail.mal_id,
    cantidad,
  };
  const update = {
  ...detailsObject,cantidad:cantidad+1
  };
 

  const incremenCarrito = () => {
    console.log("aqui me quede")
    
    if (post.mal_id == detailsObject.mal_id )  {
      console.log("este id ya esta");
      dispatch(increment());
      dispatch(axiosPutMovies(post.id, update));
    } else if (buy) {
      dispatch(increment());
      dispatch(axiosPostMovies(detailsObject));
      setBuy(false);
    
   
      console.log("estoy ");
    }
  };
 
  return (
    <div>
      <button className="btn btn-add" onClick={incremenCarrito}>
        Añadir al carrito
      </button>
    </div>
  );
};
