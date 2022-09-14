import {
  LOAD_ANS,
  LOAD_BACKSPACE,
  LOAD_BUTTONS,
  LOAD_CLEAR,
  LOAD_VALIDATION,
} from "./types";

export const loadButtons = (number) => {
  return {
    type: LOAD_BUTTONS,
    payload: number,
  };
};

export const loadAns = (number) => {
  return {
    type: LOAD_ANS,
    payload: number,
  };
};
export const loadClear = (number) => {
  return {
    type: LOAD_CLEAR,
    payload: number,
  };
};
export const loadBackspace = (number) => {
  return {
    type: LOAD_BACKSPACE,
    payload: number,
  };
};
export const loadValidation = (number) => {
  return {
    type: LOAD_VALIDATION,
    payload: number,
  };
};
