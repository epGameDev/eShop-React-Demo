import { createContext, useEffect, useReducer} from "react";
import PropTypes from "prop-types";

import { onAuthStateChangedListener, createUserDocumentFromAuth } from "../utils/firebase/firebase-utils";


// Context that you want to pass to child components.
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
});

export const USER_ACTION_TYPES = {
    SET_CURRENT_USER: "SET_CURRENT_USER"
}


const userReducer = (state, action) => {
    console.log("dispatched");
    console.log(action);

    const { type, payload } = action;

    switch (type) {
        case USER_ACTION_TYPES.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: payload,
            }    
        default:
            throw new Error(`Unhandled type: ${type} in userReducer`);
    }

}

const INITIAL_STATE = {
    currentUser: null
}


export const UserProvider = ({ children }) => {

    const [ {currentUser}, dispatch ] = useReducer(userReducer, INITIAL_STATE);
    console.log(currentUser);
    
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