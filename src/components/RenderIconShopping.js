import React from 'react'
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
export const RenderIconShopping = ( {disableCart,totalSumAmount,handleOpenModal}) => {
    return (
        <>
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
        </>
    )
}
