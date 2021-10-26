import React, { useEffect } from "react";
import { AppGalery } from "./AppGalery";
import { AppHeader } from "./AppHeader";
import { useHookGetAxios } from "../hooks/useHookGetAxios";
import { AddIconSopping } from "./AddIconSopping";
import AppModal from "./AppModal";
import '../css/App.css'
import { useDispatch, useSelector } from "react-redux";
import { axiosMovies } from "../redux-thunk/accions/rootAcion";


export const App = () => {
  const [animeList, AxiosAnime] = useHookGetAxios();
 
  const dispatch = useDispatch();

 
  // suma de la propiedad cantidad de los objetos

  useEffect(() => {
    dispatch(axiosMovies());
  }, [dispatch]);


  return (
    <>
    <div className="div-top">
      <AddIconSopping  />

    </div>
      <AppModal />

      <AppHeader AxiosAnime={AxiosAnime} />

      <AppGalery animeList={animeList} />
    </>
  );
};
