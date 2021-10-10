import React, { useEffect, useState } from "react";

import { Button } from "@material-ui/core";
import tarjetas from "../img/tarjetas.png";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { AppCircular } from "./AppCircular";
import { serviceSwal } from "../service/serviceSwal";
import { axiosDelMovies } from "../redux-thunk/accions/rootAcion";
import { useDispatch } from "react-redux";
import { types } from "../redux-thunk/types/types";

import "../css/AppBuyAnime.css";
import { getCart } from "../service/serviceBuyMovie";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export const AppBuyAnime = ({ setOpen, totalSum, loading, setLoading }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  //funcion recursiva para borrar el carrito
  const deleteAll = async () => {
    const handleGet = await getCart().then((res) => res.data);

    let firts = handleGet[0]?.id;

    if (handleGet.length > 0) {
      await dispatch(axiosDelMovies(firts));

      dispatch({ type: types.DEL_ALL });

      return deleteAll();
    } else {
      return "";
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    deleteAll();
    setLoading(false);
    setTimeout(() => {
      setOpen(false);
      setLoading(true);
      serviceSwal(
        "success",
        "Su pedido fue todo un exito !Gracia¡",
        "",
        false,
        false,
        1500
      );
    }, 4000);
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 2000);
    setLoading(false);
  }, []);

  if (!loading) {
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
              <h5>Total de su pedido:{totalSum} </h5>

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
