    import { types } from "../types/types";

export const increment = () => {
    return {
      type: types.ACTION_COUNTER_INCREMENT,
    };
  };
  
  export const decrement = () => {
    return {
      type: types.ACTION_COUNTER_DECREMENT,
    };
  };
  