import { types } from "../types/types"

export const openModal = (Boolean) =>{
   return (dispatch) =>{
    dispatch({
        type: types.MODAL_SHOW_HIDDEN,
        payload:Boolean             
        
      })
   }


}
export const openChange = (Boolean) =>{
    return (dispatch) =>{
     dispatch({
         type: types.MODAL_CHANGE,
         payload:Boolean             
         
       })
    } 
 }

 export const openLoading = (Boolean) =>{
   return (dispatch) =>{
    dispatch({
        type: types.LOADING,
        payload:Boolean             
        
      })
   } 
}