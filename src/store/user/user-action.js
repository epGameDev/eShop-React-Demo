
import { USER_ACTION_TYPES } from "./user-reducer";


export const setCurrentUser = (user) => ({ type: USER_ACTION_TYPES.SET_CURRENT_USER, payload: user });
export const selectCurrentUser = (state) => state.user.currentUser;
