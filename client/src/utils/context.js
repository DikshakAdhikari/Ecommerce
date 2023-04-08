import { createContext, useState } from "react";

export const Context= createContext();
//2. In context.js we'll write all logic of our application ex- cart logic like set items in cart or update items in cart. It means we'll put all global states logic that we need in multiple places we'll write in context.js and will use those in different other components.
const AppContext= ({ children }) => { //1. this children that we passed as a prop are the all components inside AppContext in App.js
    return (
        <Context.Provider>
            {children} 
        </Context.Provider>
    )
}

export default AppContext