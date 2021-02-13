import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  LOG_IN_START,
  LOG_IN_SUCCESS,
  LOG_IN_FAIL,
  LOG_OFF,
  SIGN_UP_FAIL,
  SIGN_UP_START,
  SIGN_UP_SUCCESS,
} from "./Types";

function signIn(dispatch) {
  return async function signInDispatch() {
    try {
      dispatch({ type: LOG_IN_SUCCESS });
      //llamada
    } catch (error) {
      dispatch({ type: LOG_IN_FAIL, payload: error.message });
    }
  };
}

function signUp(dispatch) {
  return async function signUpDispatch(email, password) {
    try {
      dispatch({ type: SIGN_UP_START });
      // llamada
      dispatch({ type: SIGN_UP_SUCCESS });
      signIn(email, password, dispatch);
    } catch (error) {
      dispatch({ type: SIGN_UP_FAIL, payload: error.message });
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
