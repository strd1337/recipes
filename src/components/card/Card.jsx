import "./Card.css"
import { 
  Typography,
  Button,
} from '@mui/material';
import defaultImage from "../../assets/defaultImage.jpg"
import { useNavigate } from "react-router-dom";

const Card = ({ recipes }) => {
  const navigate = useNavigate();

  return (
    <div className="card">
      {recipes.map(({ recipe }, index) => {
        const { label, image } = recipe;
        return (
          <div key={index} className="cardWrapper">
            <Typography gutterBottom variant="h5">
              {label}
            </Typography>
            <img src={image != null ? image : defaultImage} alt="food"></img>
            <Button 
              variant="contained" 
              color="primary" 
              onClick={() => navigate("detail", { state: recipe })}
            >More detail</Button>
          </div>
        )
      })}
    </div>
  )
}

export default Card;