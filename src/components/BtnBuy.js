import React from "react";
import PropTypes from 'prop-types';

import "../css/AppBtn.css";


export const BtnBuy = ({ setPrice,  addToCart, setOpen,  setChange}) => {
  
  const handleTrueModal = () => {
    setOpen(true);
    setChange(true);
    setPrice(true);
    addToCart()
  };

  return (
    <>
      <button className="btn btn-buy" onClick={handleTrueModal}>
        Comprar
      </button>

    </>
  );
};
BtnBuy.propTypes = {
  handleTrueModal : PropTypes.func

}