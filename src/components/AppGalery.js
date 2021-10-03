import React from "react";

import { AppCard } from "./AppCard";

import "../css/AppGalery.css";
import { useHookRandomGetId } from "../hooks/useHookRandomGetId";

export const AppGalery = ({ animeList }) => {
  const [random] = useHookRandomGetId();
  console.log(random);
  return (
    <>
      <main>
        <div className="cards">
          {animeList.length === 0 ? (
            random?.map((random) => (
              <AppCard random={random} key={random.mal_id} />
            ))
          ) : (
            <div className="cards">
              {animeList?.map((anime) => (
                <AppCard anime={anime} key={anime.mal_id} />
              ))}
            </div>
          )}
        </div>
      </main>
    </>
  );
};
