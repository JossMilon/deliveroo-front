const Meal = ({meal, menuSelected, setMenuSelected}) => {
    const handleClick = () => {
        let alreadypresent = false;
        let updateOrder = [...menuSelected];
        updateOrder = updateOrder.map((mealdOrdered) => {
            if (mealdOrdered.id === meal.id) {
                mealdOrdered.number += 1;
                alreadypresent = true;
            }
            return mealdOrdered;
        });
         if (!alreadypresent) {
            updateOrder.push({id: meal.id, title: meal.title, price: meal.price, number: 1})};
        setMenuSelected(updateOrder);
    };
    return (
        <section className="meal-component" >
            <div onClick={handleClick}>
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