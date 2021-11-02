import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { openChange, openModal } from "../redux-thunk/accions/modalAction";
import { RenderIconShopping } from "./RenderIconShopping";

import propTypes from "prop-types";
import "../css/AddIconSopping.css";

export const AddIconSopping = () => {
  const [disableCart, setDisableCart] = useState();
  const movie = useSelector((state) => state.rootReducer.carrito);

  // suma de la propiedad cantidad de los objetos
  const sumAmount = movie?.map((amount) => amount.amount);
  const totalSumAmount = sumAmount?.reduce(
    (acomulador, num) => acomulador + num,
    0
  );

  const dispatch = useDispatch();
  const handleOpenModal = () => {
    dispatch(openModal(true));
    dispatch(openChange(false));
  };
  useEffect(() => {
    setDisableCart(movie.length > 0 ? false : true);
  }, [movie]);

  return (
    <>
      <RenderIconShopping
        handleOpenModal={handleOpenModal}
        totalSumAmount={totalSumAmount}
        disableCart={disableCart}
      />
    </>
  );
};

AddIconSopping.propTypes = {
  totalSumAmount: propTypes.number,
  handleOpenModal: propTypes.func,
};
