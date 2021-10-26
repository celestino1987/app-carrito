import React, { useEffect } from "react";

import { Button } from "@material-ui/core";
import tarjetas from "../img/tarjetas.png";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { AppCircular } from "./AppCircular";
import { serviceSwal } from "../service/serviceSwal";
import { axiosDelMovies } from "../redux-thunk/accions/rootAcion";
import { useDispatch, useSelector } from "react-redux";
import { types } from "../redux-thunk/types/types";
import PropTypes from "prop-types";

import { getCart } from "../service/serviceBuyMovie";
import { openLoading, openModal } from "../redux-thunk/accions/modalAction";

import "../css/AppBuyAnime.css";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export const AppBuyAnime = ({ totalSum}) => {
  const loading = useSelector((state)=>state.loadingReducer)
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
    dispatch(openLoading(false))
    setTimeout(() => {
      dispatch(openModal(false));
      dispatch(openLoading(true))
      serviceSwal(
        "success",
        "Su pedido fue todo un exito !Gracias¡",
        "",
        false,
        false,
        1500
      );
    }, 4000);
  };

  useEffect(() => {
    setTimeout(() => {
      dispatch(openLoading(true))
    }, 1000);
    dispatch(openLoading(false))
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
              <h3>
                Total de su pedido: <span> {Math.round(totalSum)}€</span>{" "}
              </h3>

              <Button
                type="submit"
                className="btn-ui"
                color="secondary"
                size="small"
                variant="outlined"
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

AppBuyAnime.prototypes = {
  handleSubmit: PropTypes.func.isRequired,
  totalSum: PropTypes.number.isRequired,
};
