import { Dispatch } from "redux";
import {Action, ActionCreator, AnyAction} from "redux";
import {ThunkAction} from "redux-thunk";
import {GET_CATEGORIES, GET_PRODUCTS, SET_SEARCH_TEXT, TOGGLE_PRODUCT_VISIBILITY} from "../constants/ActionTypes";

export const toggleProductVisibility = (id: string) => ({
    id,
    type: TOGGLE_PRODUCT_VISIBILITY,
});

export const setSearchText = (search: string) => ({
    search,
    type: SET_SEARCH_TEXT,
});

const getCategories = (categories: Category[]) => ({
    payload: categories,
    type: GET_CATEGORIES,
});

const getProducts = (products: Product[]) => ({
    payload: products,
    type: GET_PRODUCTS,
});

export const getCategoriesAction: ActionCreator<ThunkAction<Promise<Action>, State, {}, AnyAction>> = () => {
        return (dispatch: Dispatch): Promise<Action> => {
        return fetch("categories.json").then(async (data) => {
            const result = await data.json();
            const categories: Category[] = result.data.map((category: Category): Category => ({
                id: category.id,
                selected: false,
                title: category.title,
            }));
            return dispatch(getCategories(categories));
        });
    };
};

export const getProductsAction: ActionCreator<ThunkAction<Promise<Action>, State, {}, AnyAction>> = () => {
    return async (dispatch: Dispatch): Promise<Action> => {
        const data = await fetch("products.json");
        const result = await data.json();
        const products: Product[] = result.data.map((product: Product): Product => {
            const categories: Entity[] = product.categories.map((category: Entity): Entity => ({
                id: category.id,
            }));
            return {
                categories,
                description: product.description,
                id: product.id,
                selected: false,
                title: product.title,
            };
        });
        return dispatch(getProducts(products));
    };
};
