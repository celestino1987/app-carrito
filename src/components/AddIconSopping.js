import React, { useState } from "react";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";


import "../css/AddIconSopping.css";

export const AddIconSopping = ({ setOpen, setChange ,movie ,disableCart ,setLoading}) => {
 
  const sumAmount = movie?.map((amount)=> amount.amount) 
 const totalSumAmount = sumAmount?.reduce((acomulador, num) => acomulador + num, 0);




 const handleOpenModal = () => {
   
      setOpen(true);
      setChange(false);
      
    
  };

  return (
    <div  className="icon">
      {totalSumAmount >= 1 ? <strong className="acount">{totalSumAmount}</strong> : ""}
      <button className="btn-icon" onClick={handleOpenModal} disabled={disableCart}>
        {" "}
        <AddShoppingCartIcon />
      </button>
    </div>
  );
};
