import React from "react";
import { BtnBuy } from "./BtnBuy";
import { BtnAddToCart } from "./BtnAddToCart";
import { BackArrow } from "./BackArrow";
import { AddIconSopping } from "./AddIconSopping";
import { AppCircular } from "./AppCircular";
import "../css/AddIconSopping.css";

export const RenderDetails = ({
addToCart,
  detail,
  disableCart,
  disabledBtn,
  movie,
  setChange,
  setOpen,
  setDisableCart,
  setPrice,

}) => {
  return (
    <>
      {detail ? (
        <section>
           <div className="icon">
            <BackArrow />
            {
              <AddIconSopping
                movie={movie}
                setChange={setChange}
                setOpen={setOpen}
                disableCart={disableCart}
                setDisableCart={setDisableCart}
               
              />
            }
          </div>
          <h2>Detalles de la compra</h2>
          <div className="container">
            <div className="card">
              <img src={detail?.image_url} alt="imagen.." />
              <h3>Precio: {Math.round(detail?.score * 2)}Eu</h3>
            </div>
            <div className="containerDetails">
              <h4>Puntuación: {detail?.score}</h4>
              <h4>
                <strong>Titulo: </strong>
                {detail?.title}
              </h4>
              <h4>Duración: {detail?.duration}</h4>
              <div className="trailer">
                <strong> Trailer:</strong>{" "}
                <a href={detail.trailer_url} target="_blank" rel="noreferrer">
                  Ver trailer aqui
                </a>
              </div>
            </div>
            <div className="btns">
              <BtnBuy
                setOpen={setOpen}
                setChange={setChange}
                setPrice={setPrice}
                addToCart={addToCart}
              />
              <BtnAddToCart addToCart={addToCart} disabledBtn={disabledBtn} />
            </div>
          </div>
        </section>
      ) : (
        <AppCircular />
      )}
    </>
  );
};
