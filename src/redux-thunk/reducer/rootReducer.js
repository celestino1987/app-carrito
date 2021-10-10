import { types } from "../types/types";

const initialstate = { carrito: [] };

export const rootReducer = (state = initialstate, action) => {
  switch (action.type) {
    case types.GET_BASE:
      return { ...state, carrito: action.payload };
    case types.POST_BASE:
      return { ...state, carrito: [...state.carrito, ...action.payload] };

    //eliminar put
    case types.PUT_BASE:
      return {
        ...state,
        carrito: [
          ...state.carrito.map((post) =>
            post.id === action.payload.id ? action.payload : post
          ),
        ],
      };
    case types.DEL_BASE:
      return {
        ...state,
        carrito: state.carrito.filter((elem) => elem.id !== action.payload),
        
      };
    case types.DEL_ALL:
      return initialstate;

    default:
      return { ...state };
  }
};
