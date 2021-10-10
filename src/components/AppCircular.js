import React from 'react';

import CircularProgress from '@material-ui/core/CircularProgress';
import '../css/AppCircular.css'



export  const  AppCircular = () => {


  return (
     
    <div className="divCircular"> 
     
          
         <CircularProgress  className="circular" color="secondary" />
      
    </div>

  );


}