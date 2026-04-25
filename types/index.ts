export type Category = {
  idCategory: number
  strCategory: string
  strCategoryThumb: string
}

export type IngredientItem = {
  idIngredient: number
  strIngredient: string
  strThumb: string
  strDescription: string
  strType: string | null
}

export type MealSummary = {
  idMeal: string
  strMeal: string
  strMealThumb: string
}

export type RecipeMeal = {
  idMeal: string
  strMeal: string
  strMealThumb: string
  strCategory: string
  strArea: string
  strInstructions: string
  [key: string]: string | null | undefined
}

export type MealsResponse<T> = {
  meals: T[]
}

export type CategoriesResponse = {
  categories: Category[]
}

export type IngredientListResponse = MealsResponse<IngredientItem>
export type SearchResponse = MealsResponse<MealSummary>
export type MealDetailResponse = MealsResponse<RecipeMeal>

export type IngredientPageProps = {
  params: { name: string }
}

export type MealDetailPageProps = {
  params: { id: string }
}
