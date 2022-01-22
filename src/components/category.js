import Meal from "./meal";

const Category = ({category}) => {
    return (
        <section className="category-component" >
        <h2>{category.name}</h2>
        <div>
            {category.meals.map((meal, index) => {
            return (
                <Meal key={index} meal={meal}/>
            )
            })}
        </div>

      </section>
    )
};

export default Category;