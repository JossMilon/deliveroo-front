import "./App.css";
import {useEffect, useState} from "react"
import axios from "axios";
import Category from "./components/category";

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
    <div className="container">
      <div className="menu">
        <div className="categories">
          {data.categories.map((category, index) => {
                return (
                  <Category key={index} category={category}/>
                )
              })}
        </div>
        <div className="basket">

        </div>
      </div>
    </div>
  );
}

export default App;
