import { all, call } from "@redux-saga/core/effects";

import { productCategoriesSaga } from "./product/product.saga";
import { userSagas } from "./user/user-saga";

export function* rootSaga() {
    yield all([call(userSagas), call(productCategoriesSaga) ]);
}
