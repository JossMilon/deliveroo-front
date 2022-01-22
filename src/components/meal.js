const Meal = ({meal}) => {
    return (
        <section className="meal-component" >
            <div>
                <h3>{meal.title}</h3>
                <p>{meal.description}</p>
                <p>{meal.price}</p>
                {meal.popular && <span>Popular</span>}
            </div>
            {meal.picture && <img src={meal.picture} alt="#"/>}
      </section>
    )
};

export default Meal;