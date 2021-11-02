import React from "react";
import { Button } from "@mui/material";
import { Box } from "@mui/system";

export const RenderBtnBuy = ({ handleTrueModal }) => {
  return (
    <>
      <Box mr={1}>
        <Button
          color="error"
          size="large"
          variant="outlined"
          onClick={handleTrueModal}
        >
          Comprar
        </Button>
      </Box>
    </>
  );
};
