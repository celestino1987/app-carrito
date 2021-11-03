import React from "react";
import { Button } from "@mui/material";
export const RenderBtnEnlace = ( {handleCall,disabled}) => {
  return (
    <>
      <Button
        className="btn"
        color="error"
        size="small"
        variant="outlined"
        onClick={handleCall}
        disabled={disabled}
      >
        {disabled ? "...Recalculando" : "Realiza  pedido"}
      </Button>
    </>
  );
};
