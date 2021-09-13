import { types } from "../types/types";

const initialstate = { posts: [] };

export const rootReducer = (state = initialstate, action) => {
  switch (action.type) {
    case types.GET_BASE:
      return { ...state, posts: action.payload };
    case types.POST_BASE:
      return { ...state, post: action.payload, ...state.post };
      case types.PUT_BASE:
        return  { ...state, post: action.payload, ...state.post };
    default:
      return { ...state };
  }
};
