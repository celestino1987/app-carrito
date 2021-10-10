import React from "react";


import "../css/AppBtn.css";

export const BtnAddToCart = ({ addToCart ,disabledBtn}) => {
 

  return (
    <div>
      <button className="btn btn-add" onClick={addToCart} disabled={!disabledBtn}>
        Añadir al carrito
      </button>
    </div>
  );
};
