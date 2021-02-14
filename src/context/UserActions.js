import { LOG_IN_SUCCESS, LOG_OFF, SIGN_UP_SUCCESS, ANY_ERROR } from "./Types";
import axios from "axios";

function signIn(dispatch) {
  return async function signInDispatch(email, password) {
    try {
      const { data } = await axios.get("endpoint", {
        params: { name: email, password: password },
      });
      console.log(data);
      dispatch({ type: LOG_IN_SUCCESS });
    } catch (error) {
      dispatch({ type: ANY_ERROR, payload: error.message });
    }
  };
}

function signUp(dispatch) {
  return async function signUpDispatch(email, password) {
    try {
      // llamada
      dispatch({ type: SIGN_UP_SUCCESS });
      signIn(email, password, dispatch);
    } catch (error) {
      dispatch({ type: ANY_ERROR, payload: error.message });
    }
  };
}

function logOff(dispatch) {
  return async function logOffDispatch() {
    dispatch({ type: LOG_OFF });
  };
}

function checkUser(dispatch) {
  return async function checkUserDispatch() {
    updateUser(dispatch);
  };
}

async function updateUser(dispatch) {
  try {
    dispatch({ type: LOG_IN_SUCCESS, payload: { name, idToken } });
  } catch (e) {
    dispatch({ type: LOG_OFF });
  }
}
export default { signIn, signUp, logOff, checkUser };
