import { ActionTypes } from "../constants/actions-types";

const initialState = {
    interestObj: {},
    products: [],
    product: {}
}

export const calculateInterestReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.CALCULATE_INTEREST:
            return { ...state, interestObj: payload }
        default:
            return state;
    }
}

export const productsReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return { ...state, products: payload }
        default:
            return state;
    }
}

export const selectedProductReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SELECTED_PRODUCT:
            return { ...state, product: payload }
        default:
            return state;
    }
}