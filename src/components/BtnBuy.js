import React, { useState } from "react";

import "../css/AppBtn.css";
import AppModal from "./AppModal";

export const BtnBuy = ({ addToCart,loading,setLoading,  open, setOpen, change, setChange,movie ,setAmount ,amount,disabled ,totalSum}) => {
  const [price,setPrice] = useState(false)
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

      <AppModal
       loading={loading}
       setLoading={setLoading}
      setPrice={setPrice}
      price={price}
    
      totalSum={totalSum}
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
