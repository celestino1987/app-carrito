import axios from "axios";
import  { useState, useEffect } from "react";
import { useParams } from "react-router";

 export const useHookGetId =()=>{

    const { id } = useParams();
    //console.log(id);
    const [detail, setDetail] = useState([]);
    const getDetailsId = async () => {
        await axios.get(`https://api.jikan.moe/v3/anime/${id}`).then((data) => {
            setDetail(data.data);
        });
    };
    useEffect(() => {
        getDetailsId();
    },[]);
    return [detail]
}