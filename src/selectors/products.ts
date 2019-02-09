import {match} from "react-router";

const products = (state: State, routeParams: match<{categoryId: string | undefined}>): Array<Product> => {
    if(typeof routeParams.params.categoryId === 'undefined') {
        // @ts-ignore
        return typeof state.search === 'string' || state.search instanceof String  ?
            state.products.filter((product) => (product.description.includes(state.search!) ||
                product.name.includes(state.search!))) :
            state.products
    }

    // @ts-ignore
    return typeof state.search === 'string' || state.search instanceof String ?
        state.products.filter((product) => (product.categoryId === routeParams.params.categoryId))
            .filter((product) => (product.description.includes(state.search!) ||
            product.name.includes(state.search!))) :
        state.products.filter((product) => (product.categoryId === routeParams.params.categoryId))

}

export default products