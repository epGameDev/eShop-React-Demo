import { createContext, useState } from "react";
import PropTypes from "prop-types";

// Context that you want to pass to child components.
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
});

// context provider, designed to wrap around other components so to give them access to 'UserContext'
export const UserProvider = ({ children }) => {

    const [ currentUser, setCurrentUser ] = useState(null);

    // Allows the children components to access the state.
    const value = {currentUser, setCurrentUser };
    
    return (
    <UserContext.Provider value={value}>
        {children}
    </UserContext.Provider>
    )
}

UserProvider.propTypes = {
    children: PropTypes.node,
}