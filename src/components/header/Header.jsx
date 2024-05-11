import "./Header.css";
import "../../pages/login/Login";
import { 
  Paper, 
  Typography,
  TextField,
  Card,
  CardContent,
  Autocomplete,
  Button,
  CardActions,
} from '@mui/material';
import '@fontsource/roboto/300.css';

const Header = ({ 
  query, 
  setQuery, 
  selectedMeal, 
  setSelectedMeal, 
  mealTypes, 
  getData,
}) => {
  const handleSearch = (e) => {
    e.preventDefault();
    getData();
  };

  return (
    <div className="headerWrapper">
      <Paper elevation={3} className="paperWrapper">
        <Card elevation={0}>
          <CardContent className="cardContentWrapper">
            <Typography variant="h4" className="typoWrapper">
              Find your recipe
            </Typography>
            <TextField 
              className="fieldWrapper" 
              label="Recipe" 
              placeholder="write your recipe" 
              variant="outlined"
              value={query}
              onChange={(e) => setQuery(e.target.value)} />
            <Autocomplete
              value={selectedMeal} 
              onChange={(event, newValue) => setSelectedMeal(newValue)}
              disablePortal
              className="fieldWrapper"
              options={mealTypes}
              renderInput={(params) => <TextField {...params} label="Meal types" />}
              
            />
          </CardContent>
          <CardActions classes={{ root: "justifyCenter" }}>
            <Button variant="contained" color="primary" onClick={handleSearch}>Search</Button>
          </CardActions>
        </Card>
      </Paper>
    </div>
  )
}

export default Header;