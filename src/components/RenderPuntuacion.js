import React from "react";
import { useHookGetId } from "../hooks/useHookGetId";

export const RenderPuntuacion = () => {
    const [detail] = useHookGetId();
  return (
    <div>
      <h4>
        Puntuación: <span className="color-point">{detail?.score}</span>
      </h4>
    </div>
  );
};
