import React, { useState } from 'react';

interface AppContextType {
    store: {
        theme: 'dark' | 'light';
    },
    actions: {
        toggleTheme: () => void
    }
}

export const AppContext = React.createContext<AppContextType>(Object.create(null));

export const ContextWrapper: React.FC = ({ children }) => {

    const [state, setState] = useState<AppContextType>(
        {
            store: {
                theme: 'dark'
            },
            actions: {
                toggleTheme: () => {
                    let temp = { ...state }
                    temp.store.theme = state.store.theme === 'dark' ? 'light' : 'dark'
                    setState(temp)
                }
            }
        })
    return (
        <AppContext.Provider value={state}>
            {children}
        </AppContext.Provider>
    );

}