import { call, put, takeLatest, all } from "redux-saga/effects";
import { USER_ACTION_TYPES } from "./user-reducer";
import { singInSuccess, signInFailed, singOutSuccess} from "./user-action";
import { getCurrentUserFromAuth, createUserDocumentFromAuth, signInUser, googlePopUpSignIn, signOutUser } from "../../utils/firebase/firebase-utils";



//======================================//
//========= Fetch Current User =========//
export function* getUserSnapshotFromAuth(userAuth, args) {
    try {
        const userSnapshot = yield call(createUserDocumentFromAuth, userAuth, args);
        yield put(singInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
    } catch (error) {
        yield put(signInFailed(error));
    }
}

export function* fetchCurrentUser() {
    
    try {
        const currentUserAuth = yield call(getCurrentUserFromAuth);
        if (!currentUserAuth) return yield put(singInSuccess(currentUserAuth));
        
        yield call(getUserSnapshotFromAuth, currentUserAuth);
        yield put(singInSuccess(currentUserAuth));
        
    } catch (error) {
        yield put(signInFailed(error));
    }
}

export function* onFetchCurrentUser() {
    yield takeLatest(USER_ACTION_TYPES.GET_CURRENT_USER, fetchCurrentUser );
}



//=================================//
//========= Email Sign In =========//
export function* fetchEmailAndPassword(action) {

    const { email, password } = action.payload;
    
    try {
        const { user } = yield call(signInUser, email, password);

        yield call(getUserSnapshotFromAuth, user);
        // yield put(signInSuccess(user));
    } catch (error) {
        yield put(signInFailed(error));
    }
}

export function* onFetchUserEmailAndPassword() {
    yield takeLatest(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, fetchEmailAndPassword)
}



//=================================//
//========= Google SignIn =========//
export function* fetchGoogleSignIn() {

    try {
        const { user } = yield call(googlePopUpSignIn);
        yield call(getUserSnapshotFromAuth, user);
        
    } catch (error) {
        yield put(signInFailed(error));
    }
}

export function* onFetchGoogleSignIn() {
    yield takeLatest(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START, fetchGoogleSignIn);
}



//=================================//
//========= User Sign Out =========//
export function* signOutCurrentUser() {
    try{
        yield call(signOutUser);
        yield put(singOutSuccess(null))
    }catch (error) {
        yield put(signInFailed(error));
    }

}

export function* fetchSignOutCurrentUser() {
    yield takeLatest(USER_ACTION_TYPES.SIGN_OUT_USER, signOutCurrentUser)
}



//================================//
//========= User Sign Up =========//
export function* onEmailSignUp() {
    yield takeLatest();
}


export function* userSagas() {
    yield all([call(onFetchCurrentUser), call(onFetchUserEmailAndPassword), call(onFetchGoogleSignIn), call(fetchSignOutCurrentUser)]);
}