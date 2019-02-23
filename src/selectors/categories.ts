import {match} from "react-router";

const categories = (state: State, routeParams: match<{categoryId: string | undefined}>): Category[] => {
    if (typeof routeParams.params.categoryId === "undefined") {
        return state.categories;
    }

    return state.categories.map((category) => (category.id === routeParams.params.categoryId ? {
        id: category.id,
        selected: true,
        title: category.title,
    } : category));
};

export default categories;
