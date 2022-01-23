const Meal = ({meal}) => {
    return (
        <section className="meal-component" >
            <div>
                <h3>{meal.title}</h3>
                <p className="meal-description">{meal.description}</p>
                <div className="priceAndPopularity">
                    <p className="meal-price">{meal.price}€</p>
                    {meal.popular && <span>★ Popular</span>}
                </div>
            </div>
            {meal.picture && <img src={meal.picture} alt="#"/>}
      </section>
    )
};

export default Meal;