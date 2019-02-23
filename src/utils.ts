export const filterProductsByCategoryFactory = (categoryId: string) => (products: Product[]): Product[] => (
    products.filter((product: Product) => (
        product.categories.find((e: Entity) => (
                e.id === categoryId
            ) !== undefined,
        )))
);

export const productCategoriesKeyGenerator = (product: Product): string => (
    product.categories.reduce((a, c) => a.concat(c.id) + ",", "").slice(0, -1)
);
