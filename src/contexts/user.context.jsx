import { createContext, useEffect, useReducer} from "react";
import PropTypes from "prop-types";

import { userReducer, INITIAL_STATE, USER_ACTION_TYPES } from "../store/user/user-reducer";
import { onAuthStateChangedListener, createUserDocumentFromAuth } from "../utils/firebase/firebase-utils";


// Context that you want to pass to child components.
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
});



export const UserProvider = ({ children }) => {

    const [ {currentUser}, dispatch ] = useReducer(userReducer, INITIAL_STATE);
    
    const setCurrentUser = (user) => {
        dispatch({ type: USER_ACTION_TYPES.SET_CURRENT_USER, payload: user });
    }

    // Allows the children components to access the state.
    const value = {currentUser, setCurrentUser };
    
    useEffect( () => {
        const unsubscribe = onAuthStateChangedListener(async (user) => {
            if (user) await createUserDocumentFromAuth(user);
            setCurrentUser(user);
        });

        return unsubscribe;

    }, [])

    return (
    <UserContext.Provider value={value}>
        {children}
    </UserContext.Provider>
    )
}



UserProvider.propTypes = {
    children: PropTypes.node,
}