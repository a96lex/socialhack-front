import React from "react";
import PropTypes from "prop-types";
import {
  GET_LIST_START,
  GET_LIST_SUCCESS,
  GET_CENTER_SUCCESS,
  SET_CENTER_ID,
  ANY_ERROR,
} from "./Types";
import ContentActions from "./ContentActions";

const ContentStateContext = React.createContext();
const ContentDispatchContext = React.createContext();

function contentReducer(state, action) {
  switch (action.type) {
    case GET_LIST_START:
      return {
        ...state,
        actionsListLoading: true,
        contentError: null,
      };
    case GET_LIST_SUCCESS:
      return {
        ...state,
        actionsList: action.payload,
        actionsListLoading: false,
        contentError: null,
      };
    case GET_CENTER_SUCCESS:
      return {
        ...state,
        centerInfo: action.payload,
        contentError: null,
      };
    case SET_CENTER_ID:
      return {
        ...state,
        centerId: action.payload,
      };
    case ANY_ERROR:
      return {
        ...state,
        actionsListLoading: false,
        centerId: null,
        contentError: action.payload,
      };
    default:
      return state;
  }
}

const INITIAL_STATE = {
  volunteeringList: null,
  donationList: null,
  centerInfo: null,
  contentError: null,
  actionsListLoading: false,
  centerId: null,
};

function ContentProvider({ children }) {
  const [state, dispatch] = React.useReducer(contentReducer, INITIAL_STATE);

  const dispatchedFunctions = {};
  const actions = Object.keys(ContentActions);
  for (let i = 0; i < actions.length; i += 1) {
    const action = ContentActions[actions[i]];
    dispatchedFunctions[actions[i]] = action(dispatch);
  }

  return (
    <ContentStateContext.Provider value={state}>
      <ContentDispatchContext.Provider value={dispatchedFunctions}>
        {children}
      </ContentDispatchContext.Provider>
    </ContentStateContext.Provider>
  );
}

ContentProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

function useContentState() {
  const context = React.useContext(ContentStateContext);
  if (context === undefined) {
    throw new Error("useContentState must be used within a ContentProvider");
  }
  return context;
}

function useContentActions() {
  const context = React.useContext(ContentDispatchContext);
  if (context === undefined) {
    throw new Error("useContentActions must be used within a ContentProvider");
  }
  return context;
}

export { ContentProvider, useContentState, useContentActions };
