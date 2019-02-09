import {SET_SEARCH_TEXT, TOGGLE_PRODUCT_VISIBILITY} from "../constants/ActionTypes"

export const toggleProductVisibility = (id: string) => ({
    type: TOGGLE_PRODUCT_VISIBILITY,
    id
})

export const setSearchText = (search: string) => ({
    type: SET_SEARCH_TEXT,
    search
})

