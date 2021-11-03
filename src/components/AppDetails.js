import React, { useState, useEffect } from "react";
import { useHookGetId } from "../hooks/useHookGetId";
import PropTypes from "prop-types";
import {
  axiosMovies,
  axiosPostMovies,
  axiosPutMovies,
} from "../redux-thunk/accions/rootAcion";
import { useDispatch, useSelector } from "react-redux";
import AppModal from "./AppModal";
import { RenderDetails } from "./RenderDetails";

import "../css/AppDetails.css";
import "../css/AppCard.css";
import { serviceSwal } from "../service/serviceSwal";

export const AppDetails = () => {
  const [detail] = useHookGetId();
  const dispatch = useDispatch();

  // estado para sumar o restar
  const [amount, setAmount] = useState(1);
  //estado para hacer disabled boton  menos del modal

  const [disabledBtn, setDisabledBtn] = useState(true);

  const movie = useSelector((state) => state.rootReducer.carrito);

  //Logica para añadir  al carrito

  const id = movie?.find((id) => id.mal_id === detail.mal_id);
  const detailsObject = {
    price: detail.score * 2,
    foto: detail?.image_url,
    mal_id: detail.mal_id,
    amount: amount,
  };

  const update = {
    ...detailsObject,
    amount: id?.amount + 1,
  };
  //funcion para añadir al carrito y si existe mandar solo  el put
  const addToCart = () => {
 
    setDisabledBtn(false);
    if (id?.mal_id === detailsObject.mal_id) {
      dispatch(axiosPutMovies(id.id, update));
    } else {
      dispatch(axiosPostMovies(detailsObject));
    }
    setTimeout(() => {
      setDisabledBtn(true);
    }, 2000);


      serviceSwal(
        "success",
        "Su producto se añadio correctamente",
        "",
        false,
        false,
        1000
        )
      
  };

  useEffect(() => {
    dispatch(axiosMovies());
  }, [dispatch]);

  return (
    <>
      <RenderDetails
        addToCart={addToCart}
        detail={detail}
        disabledBtn={disabledBtn}
      />
      <AppModal amount={amount} setAmount={setAmount} />
    </>
  );
};
AppDetails.propTypes = {
  totalSum: PropTypes.number,
  detailsObject: PropTypes.object,
  update: PropTypes.object,
  addToCart: PropTypes.func,
  movie: PropTypes.array,
};
