import {match} from "react-router";
import {filterProductsByCategoryFactory} from "../utils";

const products = (state: State, routeParams: match<{categoryId: string | undefined}>): Product[] => {
    if (typeof routeParams.params.categoryId === "undefined") {
        return typeof state.search === "string" || state.search !== null  ?
            state.products.filter((product) => (product.description.includes(state.search!) ||
                product.title.includes(state.search!))) :
            state.products;
    }

    const filterProductsByCategory = filterProductsByCategoryFactory(routeParams.params.categoryId);

    return typeof state.search === "string" || state.search !== null ?
        filterProductsByCategory(state.products).
        filter((product) => (product.description.includes(state.search!) ||
            product.title.includes(state.search!)))
        :
        filterProductsByCategory(state.products);

};

export default products;
