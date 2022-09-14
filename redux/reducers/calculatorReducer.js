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
  const { type, payload } = action;
  switch (type) {
    case LOAD_BUTTONS:
      //checks
      if (payload === "0") {
        if (state.number.length === 0) return state;
      }
      if (payload === ".") {
        if (state.number.length === 0) return state;
      }
      if (payload === "+") {
        if (state.number.length === 0) return state;
        const expression = state.number.concat(action.payload);
        const lastOperator = expression.slice(-1);
        if (state.number.slice(-1) == lastOperator) {
          return state;
        }
        //check for diff operators to not occur together
        const lastOperatorOccurence = state.number.slice(-1);
        if (
          lastOperatorOccurence == "*" ||
          lastOperatorOccurence == "-" ||
          lastOperatorOccurence == "/" ||
          lastOperatorOccurence == "%"
        ) {
          return state;
        }
      }
      if (payload === "-") {
        //if (state.number.length === 0) return state;
        const expression = state.number.concat(action.payload);
        const lastOperator = expression.slice(-1);
        if (state.number.slice(-1) == lastOperator) {
          return state;
        }
        //check for diff operators to not occur together
        const lastOperatorOccurence = state.number.slice(-1);
        if (
          lastOperatorOccurence == "*" ||
          lastOperatorOccurence == "/" ||
          lastOperatorOccurence == "+" ||
          lastOperatorOccurence == "%"
        ) {
          return state;
        }
      }
      if (payload === "/") {
        if (state.number.length === 0) return state;
        const expression = state.number.concat(action.payload);
        const lastOperator = expression.slice(-1);
        if (state.number.slice(-1) == lastOperator) {
          return state;
        }
        //check for diff operators to not occur together
        const lastOperatorOccurence = state.number.slice(-1);
        if (
          lastOperatorOccurence == "*" ||
          lastOperatorOccurence == "-" ||
          lastOperatorOccurence == "+" ||
          lastOperatorOccurence == "%"
        ) {
          return state;
        }
      }
      if (payload === "*") {
        if (state.number.length === 0) return state;
        const expression = state.number.concat(action.payload);
        const lastOperator = expression.slice(-1);
        if (state.number.slice(-1) == lastOperator) {
          return state;
        }
        //check for diff operators to not occur together
        const lastOperatorOccurence = state.number.slice(-1);
        if (
          lastOperatorOccurence == "/" ||
          lastOperatorOccurence == "-" ||
          lastOperatorOccurence == "+" ||
          lastOperatorOccurence == "%"
        ) {
          return state;
        }
      }
      if (payload === "%") {
        if (state.number.length === 0) return state;
        const expression = state.number.concat(action.payload);
        const lastOperator = expression.slice(-1);
        if (state.number.slice(-1) == lastOperator) {
          return state;
        }

        //check for diff operators to not occur together
        const lastOperatorOccurence = state.number.slice(-1);
        if (
          lastOperatorOccurence == "*" ||
          lastOperatorOccurence == "-" ||
          lastOperatorOccurence == "+" ||
          lastOperatorOccurence == "/"
        ) {
          return state;
        }
      }

      //End of Check

      return {
        ...state,
        ...payload,
        number: state.number.concat(action.payload),
      };
    case LOAD_ANS:
      const lastChar = state.number.slice(-1);
      if (
        lastChar === "*" ||
        lastChar === "+" ||
        lastChar === "-" ||
        lastChar === "/" ||
        lastChar === "%"
      ) {
        try {
          return {
            ...state,
            number: state.number.slice(0, -1),
          };
        } catch (e) {
          console.log(e);
        }
      }
      if (state.number === "") {
        return state;
      }
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
