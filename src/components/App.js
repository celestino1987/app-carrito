import React, { useEffect } from "react";
import { AppGalery } from "./AppGalery";
import { AppHeader } from "./AppHeader";
import { useHookGetAxios } from "../hooks/useHookGetAxios";
import { AddIconSopping } from "./AddIconSopping";
import AppModal from "./AppModal";
import { useDispatch } from "react-redux";
import { axiosMovies } from "../redux-thunk/accions/rootAcion";
import "../css/App.css";

export const App = () => {
  const [animeList, debounceAxiosData] = useHookGetAxios();

  const dispatch = useDispatch();

  // suma de la propiedad cantidad de los objetos

  useEffect(() => {
    dispatch(axiosMovies());
  }, [dispatch]);

  return (
    <>
      <div className="div-top">
        <AddIconSopping />
      </div>
      <AppModal />

      <AppHeader AxiosAnime={debounceAxiosData} />

      <AppGalery animeList={animeList} />
    </>
  );
};
