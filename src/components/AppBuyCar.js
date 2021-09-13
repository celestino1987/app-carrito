import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { axiosMovies } from "../redux-thunk/accions/rootAcion";

import "../css/AppBuyCar.css";
export const AppBuyCar = ({movie}) => {


  return (
    <div>
      <div>
        {movie.map((mov) => (
          <div key={mov.id}>
            <img className="img" src={mov.foto} alt="imagen.." />

            <span>precio: {mov.price}</span>
            <span>Cantidad:{mov.cantidad}</span>
            <button> - </button>
            <button> + </button>
            {mov.mal_id}
          </div>
        ))}
      </div>
    </div>
  );
};
