import React from "react";
import {  useHistory } from "react-router-dom";

import "../css/AppCard.css";



export const AppCard = ({ anime }) => {
 

  const history = useHistory()
  

  return (
    <>
       <div className="card">
        <div onClick={() => history.push(`/details/${anime.mal_id}`) } >
          <img src={anime.image_url} alt={'imagen de '+ anime.name}  />
        </div>
        <h3>{anime.title}</h3>
      </div>
        
    </>
  );
};
