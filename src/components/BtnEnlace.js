import React from "react";
import PropTypes from "prop-types";

import { useDispatch } from "react-redux";
import { openChange, openModal } from "../redux-thunk/accions/modalAction";
import { RenderBtnEnlace } from "./RenderBtnEnlace";

import "../css/AppBtn.css";

export const BtnEnlace = () => {
  const dispatch = useDispatch();
  const handleCall = () => {
    dispatch(openModal(true));
    dispatch(openChange(true));
  };

  return <RenderBtnEnlace handleCall={handleCall} />;
};
BtnEnlace.propTypes = {
  handleCall: PropTypes.func,
};
