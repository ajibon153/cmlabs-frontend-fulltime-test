import Link from "next/link"
import { Breadcrumbs, Card } from "@/components/molecules"
import { Heading } from "@/components/atoms"
import { listIngredients } from "@/lib/api"
import { IngredientItem, IngredientListResponse } from "@/types"

async function getListIngredients() {
  return listIngredients()
}

export default async function AllIngredients() {
    let data: IngredientListResponse

    try {
        data = await getListIngredients()
    } catch (error) {
        return (
            <div className="mt-8 md:mt-12 md:w-11/12 sm:flex sm:flex-wrap md:mx-auto mb-6 px-2">
                <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Ingredients" }]} />
                <Heading title="All Ingredients" />
                <div className="max-w-3xl mx-auto rounded-xl border border-red-200 bg-red-50 p-6 text-center text-red-700">
                    <h2 className="text-xl font-semibold mb-2">Unable to load Ingredients</h2>
                    <p className="text-sm">There was an error fetching Ingredients. Please try again later.</p>
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
                <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Ingredients" }]} />
                <Heading title="All Ingredients" />
                <div className="max-w-3xl mx-auto rounded-xl border border-yellow-200 bg-yellow-50 p-6 text-center text-yellow-900">
                    <h2 className="text-xl font-semibold mb-2">No Ingredients found</h2>
                    <p className="text-sm">
                        We couldn&apos;t find any Ingredients. Try a different ingredient or return to the home page.
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
            <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Ingredients" }]} />
            <Heading title="All Ingredients" />

            <div className="flex flex-wrap md:w-11/12 md:mx-auto mb-8 px-2">
                {data?.meals?.map((meal: IngredientItem) => (
                    <div key={meal?.idIngredient} className="w-1/2 sm:w-4/12 lg:w-2/12 mb-4 px-2">
                        <Link href="/ingredient/[name]" as={`/ingredient/${meal?.strIngredient}`}>
                            <Card mealName={meal?.strIngredient} mealImg={meal?.strThumb} />
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}
