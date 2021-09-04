
import React ,{useState ,useEffect}from 'react'
import '../css/AppHeader.css'
import { serviceChampions } from '../service/useService'


export const AppHeader = ({AxiosAnime}) => {
    const [search,setSearch] = useState()
    
    
    const handleSearch = (e) =>{
        e.preventDefault();
       
        AxiosAnime(search)
    }

  


    return (
        <>
            <header>
                <h1>El mejor <strong>-Anime-</strong> para comprar</h1>
                <form className="search-box" onSubmit={handleSearch}> 
                    <input type="search" className="search-input"  placeholder="Busca..." required 
                    value={search || ""}
                    onChange={(e)=> setSearch(e.target.value)}
                    />

                </form> 

            </header>
            <div>
        
        </div>
            
        </>
    )
}
