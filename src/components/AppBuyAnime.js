import React, { useState } from "react";

import { Button } from "@material-ui/core";
import tarjetas from "../img/tarjetas.png";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { useHookGetId } from "../hooks/useHookGetId";
import { AppCircular } from "./AppCircular";
import { serviceSwal } from "../service/serviceSwal";
import "../css/AppBuyAnime.css";
import { useDispatch } from "react-redux";
import { types } from "../redux-thunk/types/types";

import { axiosDelMovies } from "../redux-thunk/accions/rootAcion";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export const AppBuyAnime = ({
  setOpen,
  totalSum,
  price,
  loading,
  setLoading,
  movie,
}) => {
  const classes = useStyles();
  const [detail] = useHookGetId();
  const dispatch = useDispatch()

  

  const  deleteAll =() =>{

    for(let id = 0;id <= movie.length; id++){ 
    console.log(id)
    dispatch(axiosDelMovies(id))
  }
  dispatch({type:types.DEL_ALL})
  }
  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOpen(false);
      serviceSwal(
        "success",
        "Su pedido fue todo un exito !Gracia¡",
        "",
        false,
        false,
        1500
      );
    }, 5000);
    
    deleteAll()
    
      
    
  };

  if (loading) {
    return <AppCircular />;
  } else {
    return (
      <>
        <div className="centerContainer">
          <img src={tarjetas} alt="img" />
          <form
            className={classes.root}
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit}
          >
            <TextField
              required
              label="Required"
              placeholder="Nombre del titular"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              type="number"
              label="Requierd"
              placeholder="XXXX-XXXX-XXXX-XXXX"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              type="number"
              label="Requierd"
              placeholder="Fecha de caducidad (MM/AA)"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              type="number"
              label="Requierd"
              placeholder="CVV"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <div className="div-btn">
              <h5>Total de su pedido:{price ? detail.score * 2 : totalSum} </h5>

              <Button
             
                type="submit"
                className="btn-ui"
                color="secondary"
                variant="contained"
              >
                {" "}
                Enviar{" "}
              </Button>
            </div>
          </form>
        </div>
      </>
    );
  }
};
