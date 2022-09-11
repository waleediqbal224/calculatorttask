import {
  LOAD_ANS,
  LOAD_BACKSPACE,
  LOAD_BUTTONS,
  LOAD_CLEAR,
} from "../actions/types";

//export const CALCULATOR_KEY = "calculatorStore";

const initialState = {
  number: "",
  ans: "",
};

const calculatorReducer = (state = initialState, action) => {
  let { type, payload } = action;
  switch (type) {
    case LOAD_BUTTONS:
      console.log(payload);
      return {
        ...state,
        ...payload,
        number: state.number.concat(action.payload),
      };
    case LOAD_ANS:
      try {
        return {
          ...state,
          ...payload,
          ans: eval(state.number).toString(),
        };
      } catch (error) {
        return {
          ...state,
          ...payload,
          ans: "Error",
        };
      }
    case LOAD_CLEAR:
      return {
        ...state,
        ...payload,
        number: "",
        ans: "",
      };
    case LOAD_BACKSPACE:
      return {
        ...state,
        ...payload,
        number: state.number.slice(0, -1),
        ans: "",
      };
    default:
      return state;
  }
};

export default calculatorReducer;
