import React from "react";

import { AppCard } from "./AppCard";


import '../css/AppGalery.css'

export const AppGalery = ({ animeList }) => {


  
  return (
    <>
      <main>
        <div className="cards">
          {animeList.length  > 0 ? animeList?.map((anime) => (
            <AppCard anime={anime} key={anime.mal_id} />
          ))  : <h2>"No hay busqueda..." </h2>}
          
        </div>
     
      </main>
    </>
  );
};
