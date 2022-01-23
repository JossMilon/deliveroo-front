const Header = ({restaurant}) => {
    return (
        <div className="header-wrapper">
            <div className="header container">
                <div className="left-block">
                    <h1>{restaurant.name}</h1>
                    <p>{restaurant.description}</p>
                </div>
                <div className="right-block">
                    <img src={restaurant.picture} alt="#"/>
                </div>
            </div>
        </div>
    )
};

export default Header;