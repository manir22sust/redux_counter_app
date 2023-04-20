import { DECREMENT, INCREMENT, RESET } from "../constants/counterConstants";

const initialCounter = {
  count: 0,
};

export const counterReducer = (state = initialCounter, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    case RESET:
      return {
        count: 0,
      };
    default:
      return state;
  }
};
