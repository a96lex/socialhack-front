import React from "react";
import PropTypes from "prop-types";
import { GET_LIST_SUCCESS, GET_CENTER_SUCCESS, ANY_ERROR } from "./Types";
import ContentActions from "./ContentActions";

const ContentStateContext = React.createContext();
const ContentDispatchContext = React.createContext();

function contentReducer(state, action) {
  switch (action.type) {
    case GET_LIST_SUCCESS:
      return {
        ...state,
        actionsList: action.payload,
        contentError: null,
      };

    case GET_CENTER_SUCCESS:
      return {
        ...state,
        centerInfo: action.payload,
        contentError: null,
      };
    case ANY_ERROR:
      return {
        ...state,
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
