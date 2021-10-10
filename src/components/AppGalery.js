import React from "react";

import { AppCard } from "./AppCard";
import { AppCircular } from "./AppCircular";
import { useHookRandomGetId } from "../hooks/useHookRandomGetId";
import "../css/AppGalery.css";

export const AppGalery = ({ animeList, AxiosAnime }) => {
  const [random] = useHookRandomGetId();

  return (
    <>
      <main>
        {animeList.length === 0 ? (
          <div>
            {!random ? (
              <AppCircular />
            ) : (
              <div className="cards">
                {random?.map((random) => (
                  <AppCard random={random} key={random.mal_id} />
                ))}
              </div>
            )}
          </div>
        ) : (
          <div>
            {!AxiosAnime ? (
              <AppCircular />
            ) : (
              <div className="cards">
                {animeList?.map((anime) => (
                  <AppCard anime={anime} key={anime.mal_id} />
                ))}
              </div>
            )}
          </div>
        )}
      </main>
    </>
  );
};
