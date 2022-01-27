import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MealInBasket = ({meal, menuSelected, setMenuSelected}) => {
    const handleMinusClick = (meal) => {
        let updateOrder = [...menuSelected];
        updateOrder = updateOrder.map((mealdOrdered) => {
                                    if (mealdOrdered.id === meal.id) {
                                      mealdOrdered.number--
                                    }
                                    return mealdOrdered;
                                  })
                                 .filter((mealdOrdered) => {
                                    return mealdOrdered.number > 0;
                                  })
        setMenuSelected(updateOrder);
      }
      const handlePlusClick = (meal) => {
        let updateOrder = [...menuSelected];
        updateOrder = updateOrder.map((mealdOrdered) => {
          if (mealdOrdered.id === meal.id) {
            mealdOrdered.number++
          }
          return mealdOrdered;
        });
        setMenuSelected(updateOrder);
      }
    return (
        <div className="mealInTheBasket">
            <span className="updateMealNumber">
              <FontAwesomeIcon className="icon" icon="minus-circle" onClick={() => handleMinusClick(meal)}/>
              <span>{meal.number}</span>
              <FontAwesomeIcon className="icon" icon="plus-circle" onClick={() => handlePlusClick(meal)}/>
              <span className="mealTitle">{meal.title}</span>
            </span>
            <span className="mealPrice">{Math.round(meal.number*meal.price*100)/100}€</span>
      </div>
    )
};

export default MealInBasket;