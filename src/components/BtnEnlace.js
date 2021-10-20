import React from 'react'
import PropTypes from 'prop-types';

import  '../css/AppBtn.css'



export const BtnEnlace = ({setChange ,setOpen,setPrice}) => {
    const handleCall =() => {
        setOpen(true)
        setChange(true)
        setPrice(false)
        
    }
    
    return (
        <div>
        <button  className="btn-buy btn" onClick={handleCall}> Comprar</button>
        </div>
    )
}
BtnEnlace.propTypes = {
    handleCall: PropTypes.func
}