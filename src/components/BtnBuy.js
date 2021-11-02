import React from "react";
import PropTypes from "prop-types";

//import "../css/AppBtn.css";
import { useDispatch } from "react-redux";
import { openModal, openChange } from "../redux-thunk/accions/modalAction";
import { RenderBtnBuy } from "./RenderBtnBuy";


export const BtnBuy = ({ addToCart }) => {
  const dispatch = useDispatch();

  const handleTrueModal = () => {
    dispatch(openModal(true));
    dispatch(openChange(true));

    addToCart();
  };

  return (
    <>
      <RenderBtnBuy handleTrueModal={handleTrueModal}  />
    </>
  );
};
BtnBuy.propTypes = {
  handleTrueModal: PropTypes.func,
};
