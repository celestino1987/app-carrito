import  { useState , useEffect }  from "react";
import axios from 'axios'

export const useHookRandomGetId = () => {
  const [random, setRandom] = useState();

  const getRandomIds = async () => {
   const randomId = Math.floor(Math.random() * (20 - 1) + 1);
    await axios
      .get(`https://api.jikan.moe/v3/search/anime?q=&order_by=members&sort=desc&page=${randomId}`)
      .then((data) => {
        setRandom(data.data.results);
      });
      
    };
    useEffect(() => {
      setTimeout(()=>{
        
        getRandomIds();
      },1000)
    }, []);
return [random];
};
