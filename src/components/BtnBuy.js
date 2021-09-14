import React from "react";

import "../css/AppBtn.css";
import AppModal from "./AppModal";

export const BtnBuy = ({post, open, setOpen, change, setChange,movie ,setAmount ,amount,disabled }) => {
  const handleTrueModal = () => {
    setOpen(true);
    setChange(true);
  };

  return (
    <>
      <button className="btn btn-buy" onClick={handleTrueModal}>
        Comprar
      </button>

      <AppModal
      post={post}
     
      disabled={disabled}
        setOpen={setOpen}
        open={open}
        change={change}
        setChange={setChange}
        movie={movie}
        setAmount={setAmount}
        amount={amount}
      />
    </>
  );
};
