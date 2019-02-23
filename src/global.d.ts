interface Entity {
    id: string
}

interface Category extends Entity {
    title: string
    selected: boolean
}

interface Product extends Entity {
    title: string
    categories: Array<Entity>
    description: string
    selected: boolean
}

interface State {
    categories: Array<Category>
    products: Array<Product>
    search: string | null
}