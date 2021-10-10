import { useEffect, useState } from "react";
import axios from "axios";

export const useHookGetAxios = () => {
  const [animeList, setAnimeList] = useState("");

  const AxiosAnime = async (query) => {
    await axios
      .get(`https://api.jikan.moe/v3/search/anime?q=${query}`)
      .then((data) => {
        setTimeout(()=>{
          
          setAnimeList([data.data.results][0]);
        },2000)
      });
  };

  useEffect(() => {
    AxiosAnime();
  }, []);

  return [animeList, AxiosAnime];
};
