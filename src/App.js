import "./App.css";
import {useEffect, useState} from "react"
import axios from "axios";
import Category from "./components/category";
import Navbar from "./components/navbar";
import Header from "./components/header";
import Basket from "./components/basket";

import { library } from '@fortawesome/fontawesome-svg-core';
import { faMinusCircle, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
library.add(faMinusCircle, faPlusCircle);

function App() {
  const [data, setData] = useState({});
  const [menuSelected, setMenuSelected] = useState([]);
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
  }, []);
  return (
    isLoading? <span>Loading content in progress</span>:
    <>
      <Navbar/>
      <Header restaurant={data.restaurant}/>
        <div className="menu container">
          <div className="category-container">
            {data.categories.map((category, index) => {
                  return (
                    <Category key={index} category={category} menuSelected={menuSelected} setMenuSelected={setMenuSelected}/>
                  )
                })}
          </div>
          <aside className="basket-container">
                <Basket menuSelected={menuSelected} setMenuSelected={setMenuSelected}/>
          </aside>
        </div>
    </>
  );
}

export default App;
