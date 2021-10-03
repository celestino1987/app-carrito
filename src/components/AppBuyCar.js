import React, { useState, useEffect } from "react";

import { BtnEnlace } from "./BtnEnlace";
import "../css/AppBuyCar.css";

import DeleteIcon from "@material-ui/icons/Delete";
import {
  axiosDelMovies,
  axiosDelMoviesAll,
} from "../redux-thunk/accions/rootAcion";
import { useDispatch } from "react-redux";
import { axiosPutMovies } from "../redux-thunk/accions/rootAcion";
import { getCart } from "../service/serviceBuyMovie";

export const AppBuyCar = ({
  movie,
  amount,
  setAmount,
  disabled,
  setChange,
  setOpen,
  totalSum,
  setPrice,
}) => {
  const dispatch = useDispatch();

  let update = "";
  console.log("length " + movie.length);

  const handleChangeNumber = (increase = false) => {
    setAmount((prevAmount) => (increase ? prevAmount + 1 : prevAmount - 1));
  };

  // const handleSwain = () => {
  //   serviceSwal(
  //     "success",
  //     "Su pedido fue todo un exito !Gracia¡",
  //     "",
  //     false,
  //     false,
  //     1500
  //   );
  // };
  //

  return (
    <>
      <h2 className="myBuy"> Mi carrito</h2>
      <div className="scroll">
        {movie.map((mov) => (
          <div className="boxArticulo" key={mov?.mal_id}>
            <img className="img" src={mov?.foto} alt="imagen.." />

            <span>precio: {Math.round(mov?.price * mov?.amount)}€</span>
            <span>Cantidad:{mov.amount}</span>
            <button
              disabled={disabled}
              onClick={() => {
                handleChangeNumber(false);

                dispatch(
                  axiosPutMovies(
                    mov.id,
                    (update = {
                      price: mov?.price,
                      foto: mov.foto,
                      mal_id: mov?.mal_id,
                      amount: mov.amount - 1,
                    })
                  )
                );
              }}
            >
              {" "}
              -{" "}
            </button>

            <button
              onClick={() => {
                handleChangeNumber(true);
                dispatch(
                  axiosPutMovies(
                    mov.id,
                    (update = {
                      price: mov?.price,
                      foto: mov.foto,
                      mal_id: mov?.mal_id,
                      amount: mov.amount + amount,
                    })
                  )
                );
              }}
            >
              {" "}
              +{" "}
            </button>
            <button
              className="btn-del"
              onClick={() => dispatch(axiosDelMovies(mov.id))}
            >
              <DeleteIcon />
            </button>
          </div>
        ))}
        <div className="box-center">
          <h3>Total:{Math.round(totalSum)}€ </h3>
          <BtnEnlace
            setChange={setChange}
            setOpen={setOpen}
            setPrice={setPrice}
          />
        </div>
      </div>
    </>
  );
};
