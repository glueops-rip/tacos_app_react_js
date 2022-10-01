import React from "react";
import { initialState, reducer } from "./reducer";

export const UserContext = React.createContext({
    state: initialState,
    dispatch: () => null
});

export const UserProvider = ({ children }) => {
    const [state, dispatch] = React.useReducer(reducer, initialState);
    return (
        <UserContext.Provider value={{state, dispatch}}>
            { children }
        </UserContext.Provider>
    )
}

export const saveData = (dispatcher, name, value) => {
    dispatcher({ type: 'save_data', value: {name, value} });
}
