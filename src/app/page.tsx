import Link from "next/link"
import { Hero } from "@/components/organisms"
import { Card } from "@/components/molecules"
import { Button, Heading } from "@/components/atoms"

type Category = {
    idCategory: number
    strCategory: string
    strCategoryThumb: string
}

type Meal = {
    idIngredient: number
    strIngredient: string
    strThumb: string
    strDescription: string
    strType: any
}

async function getListIngredients() {
    const res = await fetch(`${process.env.API_URL}/categories.php`)

    if (!res.ok) {
        throw new Error("Failed to fetch data")
    }

    return res.json()
}

// async function getListIngredients() {
//     const res = await fetch(`${process.env.API_URL}/list.php?i=list&limit=12`)

//     if (!res.ok) {
//         throw new Error("Failed to fetch data")
//     }

//     return res.json()
// }

async function Home() {
    const categoriesData = (await getListIngredients()) || []

    return (
        <>
            <Hero />

            {/* categories */}

            <section className="mb-14">
                <Heading title="Categories" />

                <div className="flex flex-wrap md:w-11/12 md:mx-auto mb-8 px-2">
                    {categoriesData.categories.slice(0, 12).map((category: Category) => (
                        <div key={category.idCategory} className="w-1/2 sm:w-4/12 lg:w-2/12 mb-4 px-2">
                            <Link href="/ingredient/[name]" as={`/ingredient/${category.strCategory}`}>
                                <Card mealName={category.strCategory} mealImg={category.strCategoryThumb} />
                            </Link>
                        </div>
                    ))}
                </div>

                <div className="text-center">
                    <Button href="/ingredients" title="See More" />
                </div>
            </section>
            {/* 
            <section className="mb-14">
                <Heading title="See All Delicious Foods" />

                <div className="flex flex-wrap md:w-11/12 md:mx-auto mb-8 px-2">
                    {categoriesData?.meals?.slice(0, 12).map((meal: Meal) => (
                        <div key={meal?.idIngredient} className="w-1/2 sm:w-4/12 lg:w-2/12 mb-4 px-2">
                            <Link href="/ingredient/[name]" as={`/ingredient/${meal?.strIngredient}`}>
                                <Card mealName={meal?.strIngredient} mealImg={meal?.strThumb} />
                            </Link>
                        </div>
                    ))}
                </div>

                <div className="text-center">
                    <Button href="/ingredients" title="See More" />
                </div>
            </section> */}
        </>
    )
}

export default Home
