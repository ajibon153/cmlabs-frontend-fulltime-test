type IngredientListProps = {
    data: any
}

export default function IngredientList(props: IngredientListProps) {

    function getIngredientsListWithMeasure() {

        let ingredients = [];

        for (let i = 1; i <= 20; i++) {

            if (props?.data?.meals[0][`strIngredient${i}`] && props?.data?.meals[0][`strMeasure${i}`]) {

                ingredients.push(
                    <>
                        <span className="font-semibold">{props?.data?.meals[0][`strMeasure${i}`]}</span>
                        {(props?.data?.meals[0][`strMeasure${i}`]).replace(' ', '').length ? ' - ' : ' '}
                        {props?.data?.meals[0][`strIngredient${i}`]}
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