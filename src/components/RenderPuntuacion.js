import React from "react";


export const RenderPuntuacion = ({puntuacion}) => {
    
  return (
    <div>
      <h4>
        Puntuación: <span className="color-point">{puntuacion}</span>
      </h4>
    </div>
  );
};
