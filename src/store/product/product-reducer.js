export const PRODUCT_ACTION_TYPES = {
    // SET_CURRENT_PRODUCTS: "products/SET_CURRENT_PRODUCTS",
    FETCH_PRODUCTS_START:"products/FETCH_PRODUCTS_START",
    FETCH_PRODUCTS_SUCCESS:"products/FETCH_PRODUCTS_SUCCESS",
    FETCH_PRODUCTS_FAILED:"products/FETCH_PRODUCTS_FAILED"
}

const INITIAL_STATE = {
    categories: [],
    isLoading: false,
    error: null,
}



export const productReducer = (state = INITIAL_STATE, action = {}) => {
    const { type, payload } = action;

    switch (type) {

        case PRODUCT_ACTION_TYPES.FETCH_PRODUCTS_START:
            return {...state, isLoading: true}
        case PRODUCT_ACTION_TYPES.FETCH_PRODUCTS_SUCCESS:
            return {...state, categories: payload, isLoading: false }
        case PRODUCT_ACTION_TYPES.FETCH_PRODUCTS_FAILED:
            return {...state, error: payload, isLoading: false }
        default:
            return state;

    }

}