import Link from "next/link"
import Card from "@/components/Card"
import Heading from "@/components/Heading"

async function getListIngredients() {
    const res = await fetch(`${process.env.API_URL}/list.php?i=list`)

    if (!res.ok) {
        throw new Error("Failed to fetch data")
    }

    return res.json()
}

type Meal = {
    idIngredient: number
    strIngredient: string
    strThumb: string
    strDescription: string
    strType: any
}

export default async function AllIngredients() {
    const data = await getListIngredients()

    return (
        <div className="mt-8 md:mt-12">
            <Heading title="All Ingredients" />

            <div className="flex flex-wrap md:w-11/12 md:mx-auto mb-8 px-2">
                {data?.meals?.map((meal: Meal) => (
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
