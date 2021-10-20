import React from "react";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import propTypes from 'prop-types'
import "../css/AddIconSopping.css";

export const AddIconSopping = ({
  setOpen,
  setChange,
  movie,
  disableCart,
 
}) => {
  // suma de la propiedad cantidad de los objetos
  const sumAmount = movie?.map((amount) => amount.amount);
  const totalSumAmount = sumAmount?.reduce(
    (acomulador, num) => acomulador + num,
    0
  );

  const handleOpenModal = () => {
    setOpen(true);
    setChange(false);
  };

  return (
    <div className="icon">
      {totalSumAmount >= 1 ? (
        <strong className="acount">{totalSumAmount}</strong>
      ) : (
        ""
      )}
      <button
        className="btn-icon"
        onClick={handleOpenModal}
        disabled={disableCart}
      >
        {" "}
        <AddShoppingCartIcon />
      </button>
    </div>
  );
};

AddIconSopping.propTypes ={
totalSumAmount:propTypes.number,
handleOpenModal:propTypes.func

}
