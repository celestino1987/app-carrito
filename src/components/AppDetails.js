
import React from "react";

import {useHookGetId} from  '../hooks/useHookGetId'

import "../css/AppCard.css";
import "../css/AppDetails.css";

export const AppDetails = () => {
  
  const [detail] = useHookGetId()

  return (
    <>
        <h2>Detalles de la compra</h2>
      <div className="container">
        
        <div className="card">
          <img src={detail?.image_url} />
            <h3>Precio: {detail?.score * 2 }Eu</h3>
        </div>
        <div className="containerDetails">
          <h4>Puntuación: {detail?.score}</h4>
          <h4>
            <strong>Titulo: </strong>
            {detail?.title}
          </h4>
          <h4>Duración: {detail?.duration}</h4>
          <p>
            <strong> Trailer:</strong> {detail?.trailer_url ? detail?.trailer_url : "No hay trailer"}
          </p>
        </div>
      </div>
    </>
  );
};
