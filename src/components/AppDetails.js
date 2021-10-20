import React, { useState, useEffect } from "react";
import { useHookGetId } from "../hooks/useHookGetId";
import PropTypes from 'prop-types';
import {
  axiosMovies,
  axiosPostMovies,
  axiosPutMovies,
} from "../redux-thunk/accions/rootAcion";
import { useDispatch, useSelector } from "react-redux";

import "../css/AppCard.css";
import "../css/AppDetails.css";

import AppModal from "./AppModal";
import { RenderDetails } from "./RenderDetails";

export const AppDetails = () => {
  const [detail] = useHookGetId();

  //Estado para abrir o cerarr el modal

  const [open, setOpen] = useState(false);
  // estado para renderizar un modal u otro
  const [change, setChange] = useState(true);
  // estado para sumar o restar
  const [amount, setAmount] = useState(1);
  //estado para hacer disabled boton  menos del modal
 

  const [disabledBtn, setDisabledBtn] = useState(true);
  const [disableCart, setDisableCart] = useState();
  // estado de carga del componente appCircular
  const [loading, setLoading] = useState();
  const [price, setPrice] = useState(false);
  const movie = useSelector((state) => state.rootReducer.carrito);

  const total = movie.map((total) => total.price * total.amount);
  const totalSum = total.reduce((acomulador, num) => acomulador + num, 0);

  const dispatch = useDispatch();

  
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
  };
  
  useEffect(() => {
    dispatch(axiosMovies());
  }, [dispatch]);
  useEffect(() => {
    setDisableCart(movie.length > 0 ? false : true);
  }, [movie]);
  return (
    <>
      <RenderDetails
        addToCart={addToCart}
        detail={detail}
        disableCart={disableCart}
        disabledBtn={disabledBtn}
        movie={movie}
        setChange={setChange}
        setOpen={setOpen}
        setDisableCart={setDisableCart}
        setPrice={setPrice}
      />
      <AppModal
        amount={amount}
        change={change}       
        loading={loading}
        movie={movie}
        open={open}
        price={price}
        totalSum={totalSum}
        setLoading={setLoading}
        setOpen={setOpen}
        setPrice={setPrice}
        setChange={setChange}
        setAmount={setAmount}
        update={update}
      />
    </>
  );
};
AppDetails.propTypes ={
  totalSum:PropTypes.number,
  detailsObject: PropTypes.object,
  update: PropTypes.object,
  addToCart:PropTypes.func,
  movie :PropTypes.array

}