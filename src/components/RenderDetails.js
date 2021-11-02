import React from "react";
import { BtnBuy } from "./BtnBuy";
import { BtnAddToCart } from "./BtnAddToCart";
import { BackArrow } from "./BackArrow";
import { AddIconSopping } from "./AddIconSopping";
import { AppCircular } from "./AppCircular";
import { RenderPuntuacion } from "./RenderPuntuacion";
import "../css/AddIconSopping.css";

export const RenderDetails = ({
  addToCart,
  detail,
  disabledBtn,
  
  
}) => {
  return (
    <>
      {detail ? (
        <section>
          <div className="icon">
            <BackArrow />
            <AddIconSopping  />
          </div>
          <h2>Detalles de la compra</h2>
          <div className="container">
            <div className="card">
              <img src={detail?.image_url} alt="imagen.." />
              <h4>Precio:<span className="color">{Math.round(detail?.score * 2)}€
                </span> </h4>
            </div>
            <div className="containerDetails">
              <RenderPuntuacion  puntuacion={detail.score}/>
              
              <h4>
                Título:
                 <span>{ detail?.title}</span>
              </h4>
              <h4>
                Duración: <span>{detail?.duration}</span>
              </h4>
              
                <h4> Trailer:
                <a href={detail.trailer_url} target="_blank" rel="noreferrer">
                 <span> 
                   Ver trailer aquí
                   </span>
                </a>
                  </h4>{" "}
              
            </div>
            <div className="btns">
              <BtnBuy
              
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
