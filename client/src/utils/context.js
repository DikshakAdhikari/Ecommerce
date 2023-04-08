import { createContext } from "react";

export const Context= createContext();

const AppContext= ({ children }) => { //1. this children that we passed as a prop are the all components inside AppContext in App.js
    return (
        <Context.Provider>
            {children} 
        </Context.Provider>
    )
}

export default AppContext