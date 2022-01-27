import MealInBasket from "./mealInTheBasket";

const Basket = ({menuSelected, setMenuSelected}) => {
    return (
        <div className="basket">
            <button className="basket-validation" disabled={menuSelected.length > 0? false: true} >Valider votre panier</button>
            {menuSelected.length === 0? 
                <p className="basket-content">Votre panier est vide</p>:
                <>
                    {menuSelected.map((meal, index) => {
                        return (
                            <MealInBasket key={index} meal={meal} menuSelected={menuSelected} setMenuSelected={setMenuSelected}/>
                        )
                        })}
                    <div className="basketSummaryBlock">
                        <span className="basketSummary">
                            <span>Sous-total</span>
                            <span>{Math.round(menuSelected.reduce((acc, meal) => {return acc + meal.price*meal.number}, 0)*100)/100}</span>
                        </span>
                        <span className="basketSummary">
                            <span>Frais de livraison</span>
                            <span>2.5€</span>
                        </span>
                    </div>
                    <span className="total basketSummary">
                            <span>TOTAL</span>
                            <span>{Math.round(menuSelected.reduce((acc, meal) => {return acc + meal.price*meal.number}, 0)*100)/100 + 2.5}€</span>
                    </span>
                </>}
        </div>
    )
};

export default Basket; 