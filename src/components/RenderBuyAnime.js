import React from 'react'
import { Button } from "@material-ui/core";
import tarjetas from "../img/tarjetas.png";
import TextField from "@material-ui/core/TextField";

export const RenderBuyAnime = ({classes,handleSubmit,totalSum}) => {
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
    )
}
