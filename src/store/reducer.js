import { STORE_ANSWERS } from "./actionTypes";

const initialState = {
  q1_sec1_answer:"",
  q2_sec1__answer:"",
  q3_sec1_answer:"",

  q1_sec2_answer:"",
  q2_sec2__answer:0
}

export default (
  state = initialState,
  action
) => {
  switch (action.type) {
    case STORE_ANSWERS:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};
