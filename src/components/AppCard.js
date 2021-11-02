import React from "react";
import { useHistory } from "react-router-dom";
import "../css/AppCard.css";

export const AppCard = ({ anime, random }) => {
  const history = useHistory();

  return (
    <>
      <div className="card">
        <div
          onClick={() =>
            history.push(`/details/${anime ? anime.mal_id : random.mal_id}`)
          }
        >
          <img
            src={anime ? anime?.image_url : random?.image_url}
            alt={"imagen de "}
          />
        </div>
        <h3>{anime ? anime.title : random.title}</h3>
      </div>
    </>
  );
};
