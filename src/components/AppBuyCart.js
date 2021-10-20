import React, { useEffect } from "react";

import { BtnEnlace } from "./BtnEnlace";
import DeleteIcon from "@material-ui/icons/Delete";
import { axiosDelMovies } from "../redux-thunk/accions/rootAcion";
import { useDispatch } from "react-redux";
import { axiosPutMovies } from "../redux-thunk/accions/rootAcion";
import { AppCircular } from "./AppCircular";
import PropTypes from "prop-types";
import "../css/AppBuyCart.css";
import { serviceSwal } from "../service/serviceSwal";

export const AppBuyCart = ({
  loading,
  movie,
  setChange,
  setLoading,
  setOpen,
  setPrice,
  totalSum,
}) => {
 
  const dispatch = useDispatch();
  let update = {};


  const handleDelete =(id)=>{
    setOpen(false)
    serviceSwal(
      "question",
      "¿Desea eliminar el producto?",
      "",
      true,
      true,
      false
    )
   .then(async (res) => {
     if (res.isConfirmed) {
       await dispatch(axiosDelMovies(id));
       try {
        
          if(movie.length -1 < 1) {
            setOpen(false)
          }else{
            setOpen(true)
          }
       
          } catch {
            serviceSwal("error", "", "Error", false, false, 1500);
          }
        }else{
          setOpen(true)
        }
    })

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
        <div className="box-cart">
          <h2 className="myBuy"> Mi carrito</h2>
          <div className="scroll">
            {movie.map((mov) => (
              <div className="boxArticulo" key={mov?.mal_id}>
                <img className="img" src={mov?.foto} alt="imagen.." />

                <span>precio: {Math.round(mov?.price * mov?.amount)}€</span>
                <span>Cantidad:{mov.amount}</span>
                <button
                  disabled={mov.amount === 1 ? true : false}
                  onClick={() => {
                    

                    dispatch(
                      axiosPutMovies(
                        mov.id,
                        (update = {
                          ...mov,
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
                   
                    dispatch(
                      axiosPutMovies(
                        mov.id,
                        (update = {
                          ...mov,
                          amount: mov.amount + 1,
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
                  onClick={()=>handleDelete(mov.id)}
                        
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
AppBuyCart.propTypes = {
  handleChangeNumber: PropTypes.func,
  update: PropTypes.object,
};
