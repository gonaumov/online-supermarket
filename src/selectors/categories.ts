// routeParams: match<{categoryId: string | undefined}>
import {match} from "react-router";

const categories = (state: State, routeParams: match<{categoryId: string | undefined}>): Array<Category> => {
    if(typeof routeParams.params.categoryId === 'undefined') {
        return state.categories
    }

    // @ts-ignore
    return state.categories.map((category) => (category.id === routeParams.params.categoryId ? {
        'id': category.id,
        'name': category.name,
        'selected': true
    } : category))
}

export default categories