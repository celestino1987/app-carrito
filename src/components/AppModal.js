import React from "react";

import Modal from "@material-ui/core/Modal";
import { AppBuyAnime } from "./AppBuyAnime";
import { AppBuyCart } from "./AppBuyCart";
import CloseIcon from "@material-ui/icons/Close";

import "../css/AppModal.css";




export default function AppModal({
  open,
  setOpen,
  change,
  setChange,
  movie,
  setAmount,
  amount,
  totalSum,
  setPrice,
  loading,
  setLoading,
}) {
 

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div  className="modal">
      <button className="btn-close" onClick={handleClose}>
        <CloseIcon color="secondary" />,
      </button>

      {change ? (
        <AppBuyAnime
          setOpen={setOpen}
          totalSum={totalSum}
          loading={loading}
          setLoading={setLoading}
        />
      ) : (
        <AppBuyCart
          amount={amount}
          loading={loading}
          movie={movie}
          setAmount={setAmount}
          setChange={setChange}
          setLoading={setLoading}
          setOpen={setOpen}
          setPrice={setPrice}
          totalSum={totalSum}
        />
      )}
    </div>
  );

  return (
    <div>
      <Modal
        open={open}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
