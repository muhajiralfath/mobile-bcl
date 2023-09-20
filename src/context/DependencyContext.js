import {createContext, useContext} from "react";

const DepContext = createContext({});

export const useDep = () => {
    return useContext(DepContext);
}

const DepProvider = ({ children, services }) => {
    return(
        <DepContext.Provider value={services}>
            {children}
        </DepContext.Provider>
    )
}

export default DepProvider;