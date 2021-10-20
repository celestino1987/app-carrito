import React from "react";
import { AppGalery } from "./AppGalery";
import { AppHeader } from "./AppHeader";
import { useHookGetAxios } from "../hooks/useHookGetAxios";

export const App = () => {
  const [animeList, AxiosAnime] = useHookGetAxios();

  return (
    <>
      <AppHeader AxiosAnime={AxiosAnime} />

      <AppGalery animeList={animeList} />
    </>
  );
};
