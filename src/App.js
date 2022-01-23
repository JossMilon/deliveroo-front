import "./App.css";
import {useEffect, useState} from "react"
import axios from "axios";
import Category from "./components/category";
import Navbar from "./components/navbar";
import Header from "./components/header";

function App() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://deliveroo-back-jm.herokuapp.com/");
        setData(response.data);
        setIsLoading(false);
      }
      catch(error) {
        console.log(error.message)
      }
    }
    fetchData();
  }, [])
  return (
    isLoading? <span>Loading content in progress</span>:
    <>
      <Navbar/>
      <Header restaurant={data.restaurant}/>
        <div className="menu container">
          <div className="categories">
            {data.categories.map((category, index) => {
                  return (
                    <Category key={index} category={category}/>
                  )
                })}
          </div>
          <aside className="fixed-side">
            <div className="basket">
                <button className="basket-validation" disabled>Valider votre panier</button>
                <p className="basket-content">Votre panier est vide</p>
            </div>
          </aside>
        </div>
    </>
  );
}

export default App;
