import { useEffect, useState ,useMemo} from "react";
import axios from "axios";
import { debounceFunction } from "../components/debounceFuction";


export const useHookGetAxios = () => {
  const [animeList, setAnimeList] = useState([]);
  
  const debounceAxiosData = useMemo(function(){
  const AxiosAnime = async (query = "") => {
    await axios
  
    
    .get(`https://api.jikan.moe/v3/search/anime?q=${query}`)
    .then((data) => {
      setAnimeList([data.data.results][0]);
    });
  };
  return debounceFunction (AxiosAnime,1000)
},[])

  useEffect(() => {
    debounceAxiosData();
  }, []);

  return [animeList, debounceAxiosData];
};
