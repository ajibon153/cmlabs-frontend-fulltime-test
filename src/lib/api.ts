const BASE_API_URL = process.env.API_URL

if (!BASE_API_URL) {
    throw new Error("Missing API_URL environment variable")
}

async function fetchMealDb<T = any>(path: string, params?: any): Promise<T> {
    const url = BASE_API_URL + path + (params ? "?" + new URLSearchParams(params).toString() : "")
    
    const res = await fetch(url)

    if (!res?.ok || res?.status !== 200) {
        throw new Error(`TheMealDB request failed with status ${res.status}`)
    }

    return res.json() as Promise<T>
}

export async function searchMeals(query: string) {
    return fetchMealDb("/search.php", { s: query })
}

export async function lookupMeal(id: string) {
    return fetchMealDb("/lookup.php", { i: id })
}

export async function getCategories() {
    return fetchMealDb("/categories.php")
}

export async function listIngredients() {
    return fetchMealDb("/list.php", { i: "list" })
}

export async function filterByCategory(category: string) {
    return fetchMealDb("/filter.php", { c: category })
}
