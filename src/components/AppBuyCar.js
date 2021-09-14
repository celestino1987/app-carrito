import React from "react";
import "../css/AppBuyCar.css";



export const AppBuyCar = ({movie,setAmount, disabled,amount,post }) => {
 

  const handleChangeNumber = (increase = false) => {
    setAmount((prevAmount) => increase ? 
    prevAmount + 1 : prevAmount - 1)
  }

  

  return (
     
    <>

      <div className="scroll">
        {movie.map((mov) => (
          <div key={mov?.id}>
            <img className="img" src={mov?.foto} alt="imagen.." />

            <span>precio: {mov?.price}</span>
            <span>Cantidad:{mov?.amount}</span>
            <button disabled={disabled} onClick={()=> {handleChangeNumber(false)}}> - </button>
            <button onClick={()=>{handleChangeNumber (true)}}> + </button>
            {mov?.mal_id}
          </div>
        ))}
      </div>
       
    </>
  );
};
