import { takeLatest, all, call, put } from "@redux-saga/core/effects";

import { getCategoriesAndDocuments } from "../../utils/firebase/firebase-utils";
import { PRODUCT_ACTION_TYPES } from "./product-reducer";

export const fetchProductSuccess = (productArray) => ({type: PRODUCT_ACTION_TYPES.FETCH_PRODUCTS_SUCCESS, payload: productArray});
export const fetchProductFailed = (error) => ({type: PRODUCT_ACTION_TYPES.FETCH_PRODUCTS_FAILED, payload: error});



// ! Action to fetch data from a Redux Saga
export function* fetchProductCategoriesAsync() {

    try {
        const productCategories = yield call( getCategoriesAndDocuments );
        yield put( fetchProductSuccess(productCategories) );

    } catch (error) {
        yield put( fetchProductFailed(error) );

    }
}

export function* onFetchProductCategories() {
    yield takeLatest(PRODUCT_ACTION_TYPES.FETCH_PRODUCTS_START, fetchProductCategoriesAsync);
}

export function* productCategoriesSaga() {
    yield all([call(onFetchProductCategories)]);
}