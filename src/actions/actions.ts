import {GET_CATEGORIES, GET_PRODUCTS, SET_SEARCH_TEXT, TOGGLE_PRODUCT_VISIBILITY} from "../constants/ActionTypes"

export const toggleProductVisibility = (id: string) => ({
    type: TOGGLE_PRODUCT_VISIBILITY,
    id
})

export const setSearchText = (search: string) => ({
    type: SET_SEARCH_TEXT,
    search
})

const getCategories  = (categories: Array<Category>) => ({
    type: GET_CATEGORIES,
    payload: categories
})

const getProducts = (products: Array<Product>) => ({
    type: GET_PRODUCTS,
    payload: products
})

export const getCategoriesAction = () => {
    return (dispatch: any) => {
        return fetch('https://api.gousto.co.uk/products/v2.0/categories').then(async (data) => {
            const result = await data.json()
            const categories = result.data.map((category: any) => ({
                name: category.title,
                selected: false,
                id: category.id
            })) as Array<Category>
            dispatch(getCategories(categories))
        })
    };
};

export const getProductsAction = () => {
    return (dispatch: any) => {
        return fetch('https://api.gousto.co.uk/products/v2.0/products?includes[]=categories&includes[]=attributes&sort=position&image_sizes[]=365&i' +
            'mage_sizes[]=400&period_id=120').then(async (data) => {
            const result = await data.json()
            const products = result.data.map((product: any) => {
                const categoryId = product.categories.map((category: any) => (category.id))

                return {
                    id: product.id,
                    selected: false,
                    name: product.title,
                    categoryId,
                    description: product.description
                }
            }) as Array<Product>
            dispatch(getProducts(products))
        })
    };
};