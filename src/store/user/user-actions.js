import { createSelector } from "reselect";

// ! Actions to pull data from STATE
const selectUserReducer = (state) => state.user;

export const selectCurrentUser = createSelector([selectUserReducer], (user) => user.currentUser)