import { types } from "../types/types";
const ini ={
    valor:Boolean,
    defaultBool:false
  }
  
  export const modalChangeReducer = (state = ini.defaultBool,action)=>{
    //console.log(action, 'action')
    switch(action.type){
      case types.MODAL_CHANGE:
      return ini.valor = action.payload
      default:
      return state
      
}

}


   
 
