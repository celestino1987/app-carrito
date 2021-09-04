import React from "react";
import "../css/AppCard.css";

export const AppCard = ({ anime }) => {
  return (
    <>
      <div className="card">
        <a href="#" target="_blank">
          <img src={anime.image_url} />
        </a>
        <h3>{anime.title}</h3>
      </div>
    </>
  );
};
