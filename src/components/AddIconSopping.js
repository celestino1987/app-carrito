import React from 'react'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';       
import { useSelector } from 'react-redux';

import '../css/AddIconSopping.css'

export const AddIconSopping = ({setOpen,setChange  ,amount}) => {
    const count = useSelector(state => state.count.value)
    
    const handleOpenModal = () =>{  
        setOpen(true) 
        setChange(false)
       
    }

    return (
        <div className="icon">
            {
                count >=1 ?
                <strong className="acount">
                {count}
                </strong>
                : ""
            }
                <button onClick={handleOpenModal}>  <AddShoppingCartIcon /></button>
               
        </div>
    )
}
