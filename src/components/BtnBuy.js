import React from "react";

import "../css/AppBtn.css";
import AppModal from "./AppModal";

export const BtnBuy = ({ open, setOpen, change, setChange,movie }) => {
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
        setOpen={setOpen}
        open={open}
        change={change}
        setChange={setChange}
        movie={movie}
      />
    </>
  );
};
