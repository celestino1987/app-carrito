import React, {  useEffect } from "react";

import { BtnEnlace } from "./BtnEnlace";
import "../css/AppBuyCar.css";

import DeleteIcon from "@material-ui/icons/Delete";
import { axiosDelMovies } from "../redux-thunk/accions/rootAcion";
import { useDispatch } from "react-redux";
import { axiosPutMovies } from "../redux-thunk/accions/rootAcion";
import { AppCircular } from "./AppCircular";
import { getCart } from "../service/serviceBuyMovie";

export const AppBuyCar = ({
  movie,
  amount,
  setAmount,
  disabled,
  setChange,
  setOpen,
  totalSum,
  setPrice,
  loading,
  setLoading,
}) => {
  const dispatch = useDispatch();
  let update = "";
  const handleChangeNumber = (increase = false) => {
    setAmount((prevAmount) => (increase ? prevAmount + 1 : prevAmount - 1));
  };

const handleDeleteID = async( id) =>{
  const handleGet = await getCart().then((res) => res.data);
  const getId =  handleGet.find(( cartId) => cartId.id === id )
  console.log(getId?.id)
  dispatch(axiosDelMovies(getId?.id))

}

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 2000);
    setLoading(false);
  }, [movie]);
  if (!loading) {
    return <AppCircular />;
  } else {
    return (
      <>
        <div>
          <h2 className="myBuy"> Mi carrito</h2>
          <div className="scroll">
            {movie.map((mov) => (
              <div className="boxArticulo" key={mov?.mal_id}>
                <img className="img" src={mov?.foto} alt="imagen.." />

                <span>precio: {Math.round(mov?.price * mov?.amount)}€</span>
                <span>Cantidad:{mov.amount}</span>
                <button
                  disabled={disabled}
                  onClick={() => {
                    handleChangeNumber(false);

                    dispatch(
                      axiosPutMovies(
                        mov.id,
                        (update = {
                          price: mov?.price,
                          foto: mov.foto,
                          mal_id: mov?.mal_id,
                          amount: mov.amount - 1,
                        })
                      )
                    );
                  }}
                >
                  {" "}
                  -{" "}
                </button>

                <button
                  onClick={() => {
                    handleChangeNumber(true);
                    dispatch(
                      axiosPutMovies(
                        mov.id,
                        (update = {
                          price: mov?.price,
                          foto: mov.foto,
                          mal_id: mov?.mal_id,
                          amount: mov.amount + amount,
                        })
                      )
                    );
                  }}
                >
                  {" "}
                  +{" "}
                </button>
                <button
                  className="btn-del"
                  onClick={() => handleDeleteID(mov.id) }
                >
                  <DeleteIcon />
                </button>
              </div>
            ))}
            <div className="box-center">
              <h3>Total:{Math.round(totalSum)}€ </h3>
              <BtnEnlace
                setChange={setChange}
                setOpen={setOpen}
                setPrice={setPrice}
              />
            </div>
          </div>
        </div>
      </>
    );
  }
};
