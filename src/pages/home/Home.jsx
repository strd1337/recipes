import "./Home.css"
import { useEffect, useState } from "react";
import axios from "axios"

const Home = () => {
  const [query, setQuery] = useState("egg");
  const [selectedMeal, setSelectedMeal] = useState("breakfast");
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

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>Home</div>
  )
}

export default Home;