import React from "react";
import PropTypes from "prop-types";
import {
  LOG_IN_START,
  LOG_IN_SUCCESS,
  LOG_IN_FAIL,
  LOG_OFF,
  SIGN_UP_FAIL,
  SIGN_UP_START,
  SIGN_UP_SUCCESS,
} from "./Types";
import UserActions from "./UserActions";

const UserStateContext = React.createContext();
const UserDispatchContext = React.createContext();

function userReducer(state, action) {
  switch (action.type) {
    case LOG_IN_START:
      return {
        ...state,
        loggedIn: false,
        loggInError: null,
        loggInLoading: true,
        idToken: null,
      };
    case LOG_IN_SUCCESS:
      return {
        ...state,
        loggedIn: true,
        loggInError: null,
        loggInLoading: false,
        userName: action.payload?.name,
        idToken: action.payload?.idToken,
      };
    case LOG_IN_FAIL:
      return {
        ...state,
        loggedIn: false,
        loggInError: action.payload,
        loggInLoading: false,
        idToken: null,
      };
    case SIGN_UP_START:
      return {
        ...state,
        signUpLoading: true,
        signUpError: null,
        idToken: null,
      };
    case SIGN_UP_SUCCESS:
      return {
        ...state,
        signUpLoading: false,
        signUpError: null,
        idToken: null,
      };
    case SIGN_UP_FAIL:
      return {
        ...state,
        signUpLoading: false,
        signUpError: action.payload,
        idToken: null,
      };
    case LOG_OFF:
      return {
        ...state,
        loggedIn: false,
        loggInError: null,
        loggInLoading: false,
        idToken: null,
      };
    default:
      return state;
  }
}

const INITIAL_STATE = {
  loggedIn: false,
  loggInError: false,
  loggInLoading: false,
  signUpLoading: false,
  signUpError: null,
  userName: null,
  idToken: null,
  isEntity: null,
};

function UserProvider({ children }) {
  const [state, dispatch] = React.useReducer(userReducer, INITIAL_STATE);

  const dispatchedFunctions = {};
  const actions = Object.keys(UserActions);
  for (let i = 0; i < actions.length; i += 1) {
    const action = UserActions[actions[i]];
    dispatchedFunctions[actions[i]] = action(dispatch);
  }

  return (
    <UserStateContext.Provider value={state}>
      <UserDispatchContext.Provider value={dispatchedFunctions}>
        {children}
      </UserDispatchContext.Provider>
    </UserStateContext.Provider>
  );
}

UserProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

function useUserState() {
  const context = React.useContext(UserStateContext);
  if (context === undefined) {
    throw new Error("useUserState must be used within a UserProvider");
  }
  return context;
}

function useUserActions() {
  const context = React.useContext(UserDispatchContext);
  if (context === undefined) {
    throw new Error("useUserActions must be used within a UserProvider");
  }
  return context;
}

export { UserProvider, useUserState, useUserActions };
