import React,{useState} from 'react'
import { AppGalery } from './AppGalery'
import { AppHeader } from './AppHeader'
import axios from 'axios'

export const App = () => {
  const [animeList, setAnimeList] = useState();
  const AxiosAnime = async (query) => {
    await axios
      .get(`https://api.jikan.moe/v3/search/anime?q=${query}`)
      .then((data) => {
        setAnimeList([data.data.results][0]);
      });
  };
  return (
    <div>
      

      <AppHeader AxiosAnime={AxiosAnime}/>
      <AppGalery animeList={animeList} />
     
    </div>
  )
}
