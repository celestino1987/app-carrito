import React from 'react'
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import '../css/AddIconSopping.css'
import { Link } from 'react-router-dom';



export const BackArrow = () => {
    return (
        <div className="icon">
           <Link to="/"> <KeyboardBackspaceIcon /> </Link>

        </div>
    )
}
