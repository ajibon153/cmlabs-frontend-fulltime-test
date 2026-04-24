import Link from "next/link";

export default function SuggestionBox(props: any) {

    let classes = 'shadow w-full rounded text-left absolute bg-white mt-2 max-h-80 overflow-y-auto';


    if (!props?.Ingredients) {

        return <ul className={classes}>
            {
                <li className="px-2 py-1 text-gray-800 hover:bg-gray-100">
                    <p className="text-gray-500 ml-4">No such recipe</p>
                </li>
            }
        </ul>;

    }

    return (

            <ul className={classes}>
                { props?.Ingredients.map((recipe: any) => (
                    <li key={recipe.idMeal} className="px-2 py-1 text-gray-800 hover:bg-gray-100" onClick={props?.handleClick}>
                        <Link href="/meals/[id]" as={`/meals/${recipe.idMeal}`} className="flex items-center">
                            <img src={recipe.strMealThumb} alt="image" className="w-12 h-12 rounded bg-gray-100" />
                            <p className="text-gray-800 ml-4">{recipe.strMeal}</p>
                        </Link>
                    </li>)) }
            </ul>
    );

}
