import logoDeliveroo from "../images/deliveroo-logo.svg"

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="container">
                <img src={logoDeliveroo} alt="#"/>
            </div>
        </div>
    )
};

export default Navbar;