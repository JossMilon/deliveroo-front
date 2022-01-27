import Meal from "./meal";

const Category = ({category, menuSelected, setMenuSelected}) => {
    return (
        <section className="category-component" >
        <h2>{category.name}</h2>
        <div>
            {category.meals.map((meal, index) => {
            return (
                <Meal key={index} meal={meal} menuSelected={menuSelected} setMenuSelected={setMenuSelected}/>
            )
            })}
        </div>

      </section>
    )
};

export default Category;