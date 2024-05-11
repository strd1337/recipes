import "./Home.css"
import { useState } from "react";
import axios from "axios"
import Header from "../../components/header/Header";
import Card from "../../components/card/Card";

const Home = () => {
  const mealTypes = [
    "Breakfast",
    "Lunch",
    "Dinner",
    "Snack",
    "TeaTime",
  ];

  const [query, setQuery] = useState("");
  const [selectedMeal, setSelectedMeal] = useState(mealTypes[0]);
  const [recipes, setRecipes] = useState([]);

  const appId = "564bfd9b";
  const appKey = "14e1bdbc907e2c0368d5948ca3b4af72";

  const url = `https://api.edamam.com/search?q=${query}&app_id=${appId}&app_key=${appKey}&mealType=${selectedMeal}`;

  const getData = async () => {
    try {
      const { data } = await axios(url);
      setRecipes(data.hits);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <Header 
        query={query} 
        setQuery={setQuery}
        selectedMeal={selectedMeal}
        setSelectedMeal={setSelectedMeal} 
        mealTypes={mealTypes}
        getData={getData}
      />
      <Card />
    </div>
  )
}

export default Home;