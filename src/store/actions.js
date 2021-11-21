import { STORE_ANSWERS } from "./actionTypes";

export const storeAnswers = (payload) => (dispatch) => {
    try {
      dispatch({
        type: STORE_ANSWERS,
        payload
      });
    } catch (e) {
      console.log(e);
    }
  };