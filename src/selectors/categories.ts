
const categories = (state: State, ownProps: any): Array<Category> => {
    if(typeof ownProps.match.params.categoryId === 'undefined') {
        return state.categories
    }

    // @ts-ignore
    return state.categories.map((category) => (category.id === ownProps.match.params.categoryId ? {
        'id': category.id,
        'name': category.name,
        'selected': true
    } : category))
}

export default categories