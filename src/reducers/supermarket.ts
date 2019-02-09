import {AnyAction} from "redux";
import {SET_SEARCH_TEXT, TOGGLE_PRODUCT_VISIBILITY} from "../constants/ActionTypes";
import initialState from "../initialState";

const supermaket = (state: State = initialState, action: AnyAction) => {
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
        case SET_SEARCH_TEXT:
            if (action.search && action.search !== null) {
                return {
                    ...state,
                    search: action.search
                }
            }

            return {
                ...state,
                search: null
            }
        default:
            return state
    }
}

export default supermaket