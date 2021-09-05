import React from "react";
import { AppGalery } from "./AppGalery";
import { AppHeader } from "./AppHeader";
import { useHookGetAxios } from "../hooks/useHookGetAxios";


export const App = () => {
    const [animeList,AxiosAnime] = useHookGetAxios()

  return (
    <div>
      <AppHeader AxiosAnime={AxiosAnime} />
      <AppGalery animeList={animeList} />
     
    </div>
  );
};
