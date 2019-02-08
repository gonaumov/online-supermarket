import { TOGGLE_PRODUCT_VISIBILITY } from "../constants/ActionTypes"

export const toggleProductVisibility = (id: string) => ({
    type: TOGGLE_PRODUCT_VISIBILITY,
    id
})