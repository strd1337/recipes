import "./Home.css"
import { useState } from "react";
import axios from "axios"
import Header from "../../components/header/Header";
import Card from "../../components/card/Card";
import noRecipes from "../../assets/norecipes.jpg"
import { 
  Typography,
} from '@mui/material';

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
  const [recipes, setRecipes] = useState(null);

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
      {!recipes && <img src={noRecipes} className="noRecipesImg" alt="No recipe icon"></img>}
      {recipes?.length === 0 && 
        <Typography variant="h3">
          Sorry, try another food name
        </Typography>
      }
      {
        recipes?.length > 0 && <Card recipes={recipes} />
      }
    </div>
  )
}

export default Home;