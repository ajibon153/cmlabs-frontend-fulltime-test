import { Hero } from "@/components/organisms"
import CategoryList from "@/components/organisms/CategoryList"
import { getCategories } from "@/lib/api"


async function getListCategories() {
  return getCategories()
}

async function Home() {
    const categoriesData = (await getListCategories()) || []

    return (
        <>
            <Hero />
            <CategoryList categoriesData={categoriesData} />
        </>
    )
}

export default Home
