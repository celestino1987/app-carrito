import React from 'react'
import PropTypes from 'prop-types';
import { Button } from '@mui/material';

import { useDispatch } from 'react-redux';
import { openChange, openModal } from '../redux-thunk/accions/modalAction';

import  '../css/AppBtn.css'


export const BtnEnlace = () => { 
const dispatch =  useDispatch()
    const handleCall =() => {
        dispatch(openModal(true))
        dispatch(openChange(true))
      
       
        
    }
    
    return (
       
      <Button  className="btn" color="error" size="small" variant="outlined" onClick={handleCall}>
        Realizar Pedido
      </Button>
        
    )
}
BtnEnlace.propTypes = {
    handleCall: PropTypes.func
}