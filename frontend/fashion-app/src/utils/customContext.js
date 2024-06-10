'use client'

import React, { createContext, useState } from 'react';

const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {
    const [currState, setCurrState] = useState({});

    const setGlobalStateData = (data) => {
        setCurrState((prevState) => ({
            ...prevState,
            myntraData: data
        }));
    };

    const setNewItem = (newitem) => {
        setCurrState((prevState) => {
            // Check if the item already exists
            const exists = prevState.myntraData.some(item => item.p_id === newitem.p_id);
            if (exists) {
                return prevState;
            }

            return {
                ...prevState,
                myntraData: [...prevState.myntraData, newitem]
            };
        });
    };

    const value = {
        currState,
        setGlobalStateData,
        setNewItem
    };

    return (
        <GlobalContext.Provider value={value}>
            {children}
        </GlobalContext.Provider>
    );
};

export { GlobalContext, GlobalContextProvider };
