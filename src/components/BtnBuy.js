import React from "react";
import PropTypes from 'prop-types';

//import "../css/AppBtn.css";
import { useDispatch } from "react-redux";
import { openModal ,openChange} from "../redux-thunk/accions/modalAction";
import { Button } from '@mui/material';
import { Box } from "@mui/system";



export const BtnBuy = ({   addToCart}) => {
  const dispatch = useDispatch()
  
  const handleTrueModal = () => {
dispatch(openModal(true))
dispatch(openChange(true))  
    
    addToCart()
  };

  return (
    <>
    <Box mr={1}>

      <Button   color="error" size="large" variant="outlined" onClick={handleTrueModal}>
        Comprar
      </Button>
    </Box>

    </>
  );
};
BtnBuy.propTypes = {
  handleTrueModal : PropTypes.func

}