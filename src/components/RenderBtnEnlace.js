import React from "react";
import { Button } from "@mui/material";
export const RenderBtnEnlace = ( {handleCall}) => {
  return (
    <>
      <Button
        className="btn"
        color="error"
        size="small"
        variant="outlined"
        onClick={handleCall}
      >
        realiza tu pedido
      </Button>
    </>
  );
};
