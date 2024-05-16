import { USER_ACTION_TYPES } from "./user-reducer";


export const getCurrentUser = () => ({ type: USER_ACTION_TYPES.GET_CURRENT_USER });
export const getUserSignOut = () => ({ type: USER_ACTION_TYPES.SIGN_OUT_USER });
export const googleSignInStart = () => ({ type: USER_ACTION_TYPES.GOOGLE_SIGN_IN_START });
export const emailSignInStart = (email, password) => ({ type: USER_ACTION_TYPES.EMAIL_SIGN_IN_START, payload: {email, password} });
export const singInSuccess = (user) => ({ type: USER_ACTION_TYPES.SIGN_IN_SUCCESS, payload: user });
export const singOutSuccess = (user) => ({ type: USER_ACTION_TYPES.SIGN_OUT_SUCCESS, payload: user });
export const signInFailed = (error) => ({ type: USER_ACTION_TYPES.SIGN_IN_FAILED, payload: error });


export const selectCurrentUser = (state) => state.user.currentUser;