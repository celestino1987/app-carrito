import React from "react";
import { useHookGetChampions } from "../hooks/useHookGetChampions";
import { AppCard } from "./AppCard";

export const AppGalery = ({animeList}) => {
  const champion = useHookGetChampions();
  //let arr = Object.values(animeList);
console.log(animeList)
  return (
    <>
      <main>
          <div className="cards">

        
          {animeList?.map((anime) => (
            <AppCard anime={anime} key={anime.mal_id} />
              
              ))}
              </div>
    
      </main>
    </>
  );
};
