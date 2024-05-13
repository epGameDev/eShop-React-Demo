import { all, call } from "@redux-saga/core/effects";

import { productCategoriesSaga } from "./product/product.saga";

export function* rootSaga() {
    yield all([call(productCategoriesSaga)]);
}