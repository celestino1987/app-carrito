import axios from 'axios'


const URL = 'https://api.jikan.moe/v3/search/anime?q='
const SEARCH = ''

export const serviceChampions ={

        getChampions: () => axios.get(`${URL}${SEARCH}`),

}