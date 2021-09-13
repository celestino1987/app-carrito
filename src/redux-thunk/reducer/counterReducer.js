import { types } from '../types/types';

const initialState = { value: 0 };

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ACTION_COUNTER_INCREMENT:
      return { value: state.value + 1 };

    case types.ACTION_COUNTER_DECREMENT:
      return { value: state.value - 1 };

    default:
      return state;
  }
};
