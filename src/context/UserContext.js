import React from "react";
import PropTypes from "prop-types";
import { LOG_IN_SUCCESS, LOG_OFF, SIGN_UP_SUCCESS, ANY_ERROR } from "./Types";
import UserActions from "./UserActions";

const UserStateContext = React.createContext();
const UserDispatchContext = React.createContext();

function userReducer(state, action) {
  switch (action.type) {
    case LOG_IN_SUCCESS:
      return {
        ...state,
        name: action.payload?.username,
        token: action.payload?.token,
        isEntity: action.isEntity,
        loggedIn: true,
        loggInError: null,
        loggInLoading: false,
      };
    case SIGN_UP_SUCCESS:
      return {
        ...state,
        anyError: null,
        idToken: null,
      };
    case LOG_OFF:
      return {
        ...state,
        loggedIn: false,
        anyError: null,
        token: null,
        isEntity: null,
      };
    case ANY_ERROR:
      return {
        ...state,
        loggedIn: false,
        anyError: action.payload,
        token: null,
        isEntity: null,
      };
    default:
      return state;
  }
}

const INITIAL_STATE = {
  loggedIn: false,
  anyError: null,
  name: null,
  token: null,
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
