import React, { useReducer, createContext } from "react";

const initialState = {
    activeTab: 0
  };

    export const ResumePageTabsStateContext = createContext();
    export const ResumePageTabsDispatchContext = createContext();

    const reducer = (state, action) => {
        switch (action.type) {
            case "SET_ACTIVE_TAB":
            return {
                ...state,
                activeTab: action.payload.activeTabToSet
              }
            default:
            throw new Error(`Unknown action: ${action.type}`);
        }
    }

    export const setActiveTab = (dispatch, activeTabToSet) => {
        return dispatch({
          type: "SET_ACTIVE_TAB",
          payload: {
            activeTabToSet: activeTabToSet
          }
        });
      };
    
    const ResumePageTabsStateProvider = ({ children }) => {
           const [state, dispatch] = useReducer(reducer, initialState);
            return (
                <ResumePageTabsStateContext.Provider value={state}>
                    <ResumePageTabsDispatchContext.Provider value={dispatch}>
                        {children}
                    </ResumePageTabsDispatchContext.Provider>
                </ResumePageTabsStateContext.Provider>
            );
        }

    export default ResumePageTabsStateProvider;