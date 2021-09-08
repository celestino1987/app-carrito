import React, { useState } from "react";

import { Button } from "@material-ui/core";
import tarjetas from "../img/tarjetas.png";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import "../css/AppBuyAnime.css";
import { useHookGetId } from "../hooks/useHookGetId";
import { AppCircular } from "./AppCircular";
import { serviceSwal } from "../service/serviceSwal";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export const AppBuyAnime = ({ setOpen }) => {
  const classes = useStyles();
  const [detail] = useHookGetId();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOpen(false);
      serviceSwal("success",
        "Su pedido fue todo un exito !Gracia¡",
        "",
        false,
        false,
        1500
      )
    }, 5000);
  };

  if (loading) {
    return <AppCircular />;
  } else {
    return (
      <>
        <img src={tarjetas} />
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
            <h5>Total de su pedido: {detail.score * 2}</h5>

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
      </>
    );
  }
};
