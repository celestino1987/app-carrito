import React, { useState, useEffect } from "react";

import { useHookGetId } from "../hooks/useHookGetId";
import { BtnBuy } from "./BtnBuy";
import { BtnAddToCart } from "./BtnAddToCart";
import { BackArrow } from "./BackArrow";
import { AddIconSopping } from "./AddIconSopping";
import { axiosMovies } from "../redux-thunk/accions/rootAcion";
import { useDispatch, useSelector } from "react-redux";

import "../css/AppCard.css";
import "../css/AppDetails.css";
import "../css/AddIconSopping.css";

export const AppDetails = () => {
  const [detail] = useHookGetId();
  //Estado para abrir o cerarr el modal
  const [open, setOpen] = useState(false);
  // estado para renderizar un modal u otro
  const [change, setChange] = useState(true);
  // estado para sumar o restar
  const [amount, setAmount] = useState(0);
  //estado para hacer disabled boton  menos del modal
  const [disabled, setDisabled] = useState(true);
  // estado de carga del componente appCircular
  const [loading, setLoading] = useState(false);

  const movie = useSelector((state) => state.rootReducer.carrito);

  const acount = movie.map((count) => count.amount );
  const total = movie.map((total) => total.price * total.amount);
  const totalSum = total.reduce((acomulador, num) => acomulador + num, 0);

  const dispatch = useDispatch();
console.log("doy acount" + acount)


  useEffect(() => {
    dispatch(axiosMovies());
  }, [dispatch]);
  useEffect(() => {
    setDisabled( acount.find((one) => one >= 0)  ? false : true);
  }, [amount]);
  



  return (
    <>
      <div className="icon">
        <BackArrow />
        <AddIconSopping movie={movie} setChange={setChange} setOpen={setOpen} />
      </div>
      <h2>Detalles de la compra</h2>
      <div className="container">
        <div className="card">
          <img src={detail?.image_url} alt="imagen.." />
          <h3>Precio: {Math.round(detail?.score * 2)}Eu</h3>
        </div>
        <div className="containerDetails">
          <h4>Puntuación: {detail?.score}</h4>
          <h4>
            <strong>Titulo: </strong>
            {detail?.title}
          </h4>
          <h4>Duración: {detail?.duration}</h4>
          <div className="trailer">
            <strong> Trailer:</strong>{" "}
            <a href={detail.trailer_url} target="_blank">
              Ver trailer aqui
            </a>
          </div>
        </div>
        <div className="btns">
          <BtnBuy
            disabled={disabled}
            amount={amount}
            setAmount={setAmount}
            open={open}
            setOpen={setOpen}
            change={change}
            setChange={setChange}
            movie={movie}
            totalSum={totalSum}
            loading={loading}
            setLoading={setLoading}
          />
          <BtnAddToCart movie={movie} amount={amount} setAmount={setAmount} />
        </div>
      </div>
    </>
  );
};
