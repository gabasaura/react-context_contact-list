import React, { createContext, useEffect, useState } from 'react';
import getState from './Flux';

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
    const [state, setState] = useState(getState({
        getState: () => state,
        setState: (updatedState) => setState({
            ...state,
            ...updatedState
        })
    }));

    useEffect(() => {
        state.actions.loadSomeData();
    }, []);

    return (
        <AppContext.Provider value={state}>
            {children}
        </AppContext.Provider>
    );
};

export default AppContextProvider;