import React from "react";

import Modal from "@material-ui/core/Modal";
import { AppBuyAnime } from "./AppBuyAnime";
import { AppBuyCart } from "./AppBuyCart";
import CloseIcon from "@material-ui/icons/Close";

import { useDispatch, useSelector } from "react-redux";

import { openModal } from "../redux-thunk/accions/modalAction";

import "../css/AppModal.css";

export default function AppModal() {
  const state = useSelector((state) => state.modalReducer);
  const changeModal = useSelector((state) => state.modalChangeReducer);

  //console.log( 'Estado para el modal del carrito',state)
  //console.log('Estado para el modal de compra ',changeModal)
  const movie = useSelector((state) => state.rootReducer.carrito);
  const total = movie.map((total) => total.price * total.amount);
  const totalSum = total.reduce((acomulador, num) => acomulador + num, 0);

  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(openModal(false));
  };

  const body = (
    <div className="body">

    <div className="modal">
      <div className="div-icon-close">
        <button className="btn-close" onClick={handleClose}>
          <CloseIcon color="secondary" />,
        </button>
      </div>

      {changeModal ? (
        <AppBuyAnime totalSum={totalSum} />
        ) : (
          <AppBuyCart totalSum={totalSum} />
          )}
    </div>
          </div>
  );

  return (
    <div>
      <Modal
        open={state}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
