import { types } from "../types/types";

const ini ={
    valor : Boolean,
    defaultBool:false
  
  }
  export const loadingReducer = (state = ini.defaultBool, action) => {
    //console.log(action ,'action',ini.valor)
    switch (action.type) {
      case types.LOADING:
        return  ini.valor = action.payload
        
        default:
          return state;
          
        }
      };
        
  