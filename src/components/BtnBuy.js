import React from 'react'

import '../css/AppBtn.css' 
import AppModal from './AppModal'


export const BtnBuy = () => {
    const [open, setOpen] = React.useState(false);



    return (
        <>

        <button  className="btn btn-buy" onClick={()=> setOpen(true)}>
            Comprar
        </button>
        


        <AppModal setOpen={setOpen} open={open} />
        </>
    )
}
