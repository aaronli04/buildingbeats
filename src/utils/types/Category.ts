export interface Category {
    main: CategoryItem,
    subcategories: CategoryItem[]
}

export interface CategoryItem {
    title: string,
    link: string
}