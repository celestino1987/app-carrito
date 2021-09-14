import React from "react";
import { useDispatch } from "react-redux";
import { useHookGetId } from "../hooks/useHookGetId";
import {

  axiosPostMovies,
  axiosPutMovies,
} from "../redux-thunk/accions/rootAcion";
import { increment } from "../redux-thunk/accions/actionsCounter";

import "../css/AppBtn.css";


export const BtnAddToCart = ({ buy, setBuy, post, movie , amount, setAmount}) => {
  const [detail] = useHookGetId();
  const dispatch = useDispatch();


  
  const detailsObject = {
    price: detail.score * 2,
    foto: detail?.image_url,
    mal_id: detail.mal_id,
    amount 
  };
  const update = {
    ...detailsObject,
    amount 
  };

  const incremenCarrito = () => {
    console.log("aqui me quede");

    if (
      post?.mal_id == detailsObject.mal_id ||
      movie.find((id) => id.mal_id === detailsObject.mal_id)
    ) {
      console.log("este id ya esta");
      if (post === undefined) {
        console.log("post undefine");
        let idUndefine = movie.find((id) => id.mal_id === detailsObject.mal_id && id.id);
        setAmount(prevAmount => prevAmount +1)
        console.log(idUndefine.id);
        dispatch(increment());
        dispatch(axiosPutMovies(idUndefine?.id, update));
      } else {
        setAmount(prevAmount => prevAmount +1)
        dispatch(increment());

        dispatch(axiosPutMovies(post.id, update));
      }
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
