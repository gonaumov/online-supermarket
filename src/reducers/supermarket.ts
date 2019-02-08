import {AnyAction} from "redux";
import {TOGGLE_PRODUCT_VISIBILITY} from "../constants/ActionTypes";
import initialState from "../initialState";

const supermaket = (state: State = initialState , action: AnyAction) => {
    switch (action.type) {
        case TOGGLE_PRODUCT_VISIBILITY:
        return {
            ...state,
            products: state.products.map((product) => (
                product.id === action.id ? {
                    ...product,
                    selected: !product.selected
                } : product
            ))
        }
        default:
        return state
    }
}

export default supermaket