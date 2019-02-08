import {match} from "react-router";

const products = (state: State, routeParams: match<{categoryId: string | undefined}>): Array<Product> => {
    if(typeof routeParams.params.categoryId === 'undefined') {
        return state.products
    }

    return state.products.filter((product) => (product.categoryId === routeParams.params.categoryId))
}

export default products