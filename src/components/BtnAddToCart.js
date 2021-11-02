import { Button } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

import "../css/AppBtn.css";

export const BtnAddToCart = ({ addToCart, disabledBtn }) => {
  return (
    <>
      <Box ml={1}>
        <Button
          color="success"
          size="large"
          variant="outlined"
          onClick={addToCart}
          disabled={!disabledBtn}
        >
          Añadir al carrito
        </Button>
      </Box>
    </>
  );
};
