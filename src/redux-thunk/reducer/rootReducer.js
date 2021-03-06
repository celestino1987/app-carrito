import { types } from "../types/types";

const initialstate = { carrito: [] };

export const rootReducer = (state = initialstate, action) => {
 // console.log(action,'action')
  switch (action.type) {
    case types.GET_BASE:
      return { ...state, carrito: action.payload };
    case types.POST_BASE:
      return { ...state, carrito: [...state.carrito, ...action.payload] };

    case types.PUT_BASE:
      return {
        ...state,
        carrito: [
          ...state.carrito.map((item) =>
            item.id === action.payload.id ? action.payload  : item
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
