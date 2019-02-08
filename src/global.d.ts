interface Category {
    name: string
    id: string
    selected: boolean
}

interface Product {
    name: string
    categoryId: string
    id: string
    description: string
    selected: boolean
}

interface State {
    categories: Array<Category>
    products: Array<Product>
    search: string | null
}