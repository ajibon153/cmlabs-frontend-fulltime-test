import Link from "next/link"
import { Breadcrumbs, Card } from "@/components/molecules"
import { Heading } from "@/components/atoms"
import { filterByIngredientName } from "@/lib/api"
import { IngredientPageProps, MealSummary, MealsResponse } from "@/types"

async function getIngredients(name: string) {
    return filterByIngredientName(name)
}

async function Ingredients({ params }: IngredientPageProps) {
    let data: MealsResponse<MealSummary>
    const resolvedParams = await params
    const name = resolvedParams.name
    const mealName = name ? name.replace("%20", " ") : ""
    console.log("========== resolvedParams", resolvedParams)

    // if (!params?.name) {
    //     return <div className="mt-8 md:mt-12 md:w-11/12 sm:flex sm:flex-wrap md:mx-auto mb-6 px-2"></div>
    // }


    try {
        data = await getIngredients(name)
        console.log("data Ingredients", data)
    } catch (error) {
        return (
            <div className="mt-8 md:mt-12 md:w-11/12 sm:flex sm:flex-wrap md:mx-auto mb-6 px-2">
                <Breadcrumbs
                    items={[
                        { label: "Home", href: "/" },
                        { label: "Ingredients", href: "/ingredients" },
                        { label: mealName }
                    ]}
                />
                <Heading title={`${mealName} Ingredients`} />
                <div className="max-w-3xl mx-auto rounded-xl border border-red-200 bg-red-50 p-6 text-center text-red-700">
                    <h2 className="text-xl font-semibold mb-2">Unable to load Ingredients</h2>
                    <p className="text-sm">
                        There was an error fetching Ingredients for {mealName}. Please try again later.
                    </p>
                    <Link
                        href="/"
                        className="inline-block mt-4 rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700 transition"
                    >
                        Back to home
                    </Link>
                </div>
            </div>
        )
    }

    if (!data?.meals?.length) {
        return (
            <div className="mt-8 md:mt-12 md:w-11/12 sm:flex sm:flex-wrap md:mx-auto mb-6 px-2">
                <Breadcrumbs
                    items={[
                        { label: "Home", href: "/" },
                        { label: "Ingredients", href: "/ingredients" },
                        { label: mealName }
                    ]}
                />
                <Heading title={`${mealName} Ingredients`} />
                <div className="max-w-3xl mx-auto rounded-xl border border-yellow-200 bg-yellow-50 p-6 text-center text-yellow-900">
                    <h2 className="text-xl font-semibold mb-2">No Ingredients found</h2>
                    <p className="text-sm">
                        We couldn&apos;t find any Ingredients for {mealName}. Try a different ingredient or return to
                        the home page.
                    </p>
                    <Link
                        href="/"
                        className="inline-block mt-4 rounded-lg bg-yellow-700 px-4 py-2 text-sm font-medium text-white hover:bg-yellow-800 transition"
                    >
                        Back to home
                    </Link>
                </div>
            </div>
        )
    }

    return (
        <div className="mt-8 md:mt-12 md:w-11/12 sm:flex sm:flex-wrap md:mx-auto mb-6 px-2">
            <Breadcrumbs
                items={[
                    { label: "Home", href: "/" },
                    { label: "Ingredients", href: "/ingredients" },
                    { label: mealName }
                ]}
            />

            <Heading title={`${mealName} Ingredients`} />

            <div className="sm:flex sm:flex-wrap md:w-11/12 md:mx-auto mb-6 px-2">
                {data.meals.map((food: MealSummary) => (
                    <div key={food.idMeal} className="w-full sm:w-6/12 md:w-4/12 lg:w-2/12 mb-4 px-2">
                        <Link href={`/meals/${food.idMeal}`}>
                            <Card mealName={food.strMeal} mealImg={food.strMealThumb} />
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Ingredients
