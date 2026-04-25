import Link from "next/link"
import { Badge, Clock, ImageWithSkeleton, SubHeading } from "@/components/atoms"
import { Breadcrumbs, IngredientList } from "@/components/molecules"
import { lookupMeal } from "@/lib/api"
import { MealDetailPageProps, MealDetailResponse, RecipeMeal } from "@/types"

async function getMealDetails(id: string) {
  return lookupMeal(id)
}

async function MealDetail({ params }: MealDetailPageProps) {
    let data: MealDetailResponse
    const resolvedParams = await params
    const mealId = resolvedParams.id
    console.log("MealDetail params", params)

    try {
        data = await getMealDetails(mealId)
    } catch (error) {
        return (
            <div className="mt-8 md:mt-12 md:w-11/12 md:mx-auto px-2">
                <div className="max-w-3xl mx-auto rounded-xl border border-red-200 bg-red-50 p-6 text-center text-red-700">
                    <h1 className="text-2xl font-semibold mb-2">Unable to load recipe</h1>
                    <p className="text-sm mb-4">
                        We couldn&apos;t fetch the recipe details right now. Please try again later.
                    </p>
                    <Link
                        href="/"
                        className="inline-block rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700 transition"
                    >
                        Back to home
                    </Link>
                </div>
            </div>
        )
    }

    if (!data?.meals?.length) {
        return (
            <div className="mt-8 md:mt-12 md:w-11/12 md:mx-auto px-2">
                <div className="max-w-3xl mx-auto rounded-xl border border-yellow-200 bg-yellow-50 p-6 text-center text-yellow-900">
                    <h1 className="text-2xl font-semibold mb-2">Meal not found</h1>
                    <p className="text-sm mb-4">
                        No recipe was found for this id. It may have been removed or the link is invalid.
                    </p>
                    <Link
                        href="/"
                        className="inline-block rounded-lg bg-yellow-700 px-4 py-2 text-sm font-medium text-white hover:bg-yellow-800 transition"
                    >
                        Back to home
                    </Link>
                </div>
            </div>
        )
    }

    const recipe = data.meals[0]

    return (
        <div className="mt-8 md:mt-12 md:w-11/12 md:mx-auto px-2">
            <Breadcrumbs
                items={[
                    { label: "Home", href: "/" },
                    { label: "Ingredients", href: "/ingredients" },
                    { label: recipe.strCategory, href: "/ingredient/" + recipe.strCategory },
                    { label: recipe.strMeal }
                ]}
            />
            <article className="lg:mx-auto my-4 md:mt-8 text-gray-800">
                <div className="md:flex md:flex-wrap mb-4">
                    <div className="w-full md:w-6/12 lg:w-5/12 px-4 sm:my-4">
                        <ImageWithSkeleton
                            src={recipe.strMealThumb}
                            alt={recipe.strMeal}
                            className="rounded w-full object-cover max-h-96 md:max-h-none"
                        />
                    </div>

                    <div className="w-full md:w-6/12 lg:w-7/12 px-4 lg:pl-8 sm:my-4">
                        <header className="flex justify-between mb-4 mt-4 sm:mt-0 items-start">
                            <h2 className="text-2xl font-semibold tracking-wide capitalize sm:w-10/12">
                                {recipe.strMeal}
                            </h2>

                            <div className="sm:w-2/12 sm:justify-end pt-1 ps-1 print:hidden flex"></div>
                        </header>

                        <div className="mb-6">
                            <Link href={`/ingredient/${recipe.strCategory}`}>
                                <Badge title={recipe.strCategory} />
                            </Link>

                            <Badge title={recipe.strArea} />
                        </div>

                        <div className="flex mb-6">
                            <Clock title="Prep: 10 mins" />
                            <Clock title="Total: 1 hr 10 mins" />
                        </div>

                        <SubHeading title="Ingredients" />

                        <IngredientList data={data} />
                    </div>
                </div>

                <div className="px-4 mt-4 md:mt-2 mb-8 md:mb-12">
                    <SubHeading title="Instructions" />

                    <p className="py-2 whitespace-pre-wrap leading-relaxed">{recipe.strInstructions}</p>
                </div>
            </article>
        </div>
    )
}

export default MealDetail
