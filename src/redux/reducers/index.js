import { combineReducers } from "redux";
import { calculateInterestReducer, productsReducer, selectedProductReducer } from "./reducers";

const reducers = combineReducers({
    calculateInterestReducer,
    allProducts: productsReducer,
    product: selectedProductReducer
});

export default reducers;