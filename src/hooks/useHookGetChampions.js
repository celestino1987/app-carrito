import {useEffect,useState} from 'react'
import { serviceChampions } from '../service/useService'

export const useHookGetChampions = () =>{
    const [champions,setChampions] = useState([])
    useEffect(()=>{
    serviceChampions.getChampions().then((data)=>{
        setChampions( data.data.results)
    })

    },[])

    return [champions,setChampions]

}