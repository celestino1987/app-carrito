import React,{useState,useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import propTypes from 'prop-types'
import { openChange, openModal } from "../redux-thunk/accions/modalAction";

import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import "../css/AddIconSopping.css";

export const AddIconSopping = () => {
  const [disableCart, setDisableCart] = useState();
  const movie = useSelector((state) => state.rootReducer.carrito);

 
  // suma de la propiedad cantidad de los objetos
  const sumAmount = movie?.map((amount) => amount.amount);
  const totalSumAmount = sumAmount?.reduce(
    (acomulador, num) => acomulador + num,
    0
  );


  const dispatch = useDispatch()
  const handleOpenModal = () => {
  
   dispatch(openModal(true))
   dispatch(openChange(false))
 
  };
  useEffect(() => {
    setDisableCart(movie.length > 0 ? false : true);
  }, [movie]);

  return (
    <>
    <div className="icon">
      {totalSumAmount >= 1 ? (
        <strong className="acount">{totalSumAmount}</strong>
      ) : (
        ""
      )}
      <button
        className="btn-icon"
        onClick={handleOpenModal}
        disabled={disableCart}
      >
        {" "}
        <AddShoppingCartIcon />
      </button>
    </div>
    
    </>
  );
};

AddIconSopping.propTypes ={
totalSumAmount:propTypes.number,
handleOpenModal:propTypes.func

}
