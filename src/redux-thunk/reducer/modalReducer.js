import { types } from "../types/types";

const ini ={
  valor : Boolean,
  defaultBool:false

}
export const modalReducer = (state = ini.defaultBool, action) => {
  //console.log(action ,'action',ini.valor)
  switch (action.type) {
    case types.MODAL_SHOW_HIDDEN:
      return  ini.valor = action.payload
      
      default:
        return state;
        
      }
    };
      
