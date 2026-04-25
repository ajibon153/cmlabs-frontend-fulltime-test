import { MealDetailResponse } from "@/types"

type IngredientListProps = {
    data: MealDetailResponse
}

export default function IngredientList(props: IngredientListProps) {

    function getIngredientsListWithMeasure() {

        let ingredients = [];

        for (let i = 1; i <= 20; i++) {
            const measure = props?.data?.meals[0][`strMeasure${i}`]
            const ingredient = props?.data?.meals[0][`strIngredient${i}`]

            if (ingredient && measure) {
                ingredients.push(
                    <>
                        <span className="font-semibold">{measure}</span>
                        {String(measure).replace(' ', '').length ? ' - ' : ' '}
                        {ingredient}
                    </>
                );
            }
        }

        return ingredients;
    }


    let classes =  getIngredientsListWithMeasure().length >= 9 
        ? 'list-disc list-inside ps-3 md:columns-2' 
        : 'list-disc list-inside ps-3'


    return (

        <ul className={classes}>
            { getIngredientsListWithMeasure().map((ingredient, index) => (<li className="pt-1" key={index}>{ingredient}</li>)) }
        </ul>
    );

}