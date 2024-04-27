export const PRODUCT_ACTION_TYPES = {
    SET_CURRENT_PRODUCTS: "SET_CURRENT_PRODUCTS",
}

const INITIAL_STATE = {
    productCategoryMap: {},
}



export const productReducer = (state = INITIAL_STATE, action = {}) => {
    const { type, payload } = action;

    switch (type) {

        case PRODUCT_ACTION_TYPES.SET_CURRENT_PRODUCTS:
            return {...state, productCategoryMap: payload }
        default:
            return state;

    }

}