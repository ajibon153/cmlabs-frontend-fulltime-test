import Link from "next/link"
import { Card } from "@/components/molecules"
import { Button, Heading } from "@/components/atoms"
import { Category, CategoriesResponse } from "@/types"

type CategoryListProps = {
  categoriesData: CategoriesResponse
}

const CategoryList = ({ categoriesData }: CategoryListProps) => {
    return (
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
    )
}

export default CategoryList
