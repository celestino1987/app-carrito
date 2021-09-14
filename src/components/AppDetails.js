import React, { useState, useEffect, useLayoutEffect } from "react";

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
  const [open, setOpen] = useState(false);
  const [change, setChange] = useState(true);
  //condicion para que no  pueda comprar mas de una vez cuando se entra por promera vez
  const [buy, setBuy] = useState(true);
  const [amount, setAmount] = useState(1);
  const [disabled, setDisabled] = useState(true);

  const dispatch = useDispatch();
  const movie = useSelector((state) => state.rootReducer.posts);
  const post = useSelector((state) => state.rootReducer.post);
  console.log(movie)
  useEffect(() => {
    dispatch(axiosMovies());
  }, []);
// useEffect(() => {
//   setDisabled(amount > 0 ? false : true);
// }, [amount]);

  return (
    <>
      <div className="icon">
        <BackArrow />
        <AddIconSopping
          amount={amount}
          setChange={setChange}
          open={open}
          setOpen={setOpen}
        />
      </div>
      <h2>Detalles de la compra</h2>
      <div className="container">
        <div className="card">
          <img src={detail?.image_url} alt="imagen.." />
          <h3>Precio: {detail?.score * 2}Eu</h3>
        </div>
        <div className="containerDetails">
          <h4>Puntuación: {detail?.score}</h4>
          <h4>
            <strong>Titulo: </strong>
            {detail?.title}
          </h4>
          <h4>Duración: {detail?.duration}</h4>
          <p>
            <strong> Trailer:</strong>{" "}
            {detail?.trailer_url ? detail?.trailer_url : "No hay trailer"}
          </p>
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
            post={post}
          />
          <BtnAddToCart
            buy={buy}
            setBuy={setBuy}
            movie={movie}
            post={post}
            amount={amount}
            setAmount={setAmount}
          />
        </div>
      </div>
    </>
  );
};
