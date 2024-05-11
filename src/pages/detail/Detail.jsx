import "./Detail.css";
import { useState } from "react";
import { useLocation } from 'react-router-dom';
import { 
  Card, 
  CardContent,  
  Typography,
  Box,
  Divider,
  Tab,
} from '@mui/material';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

const Detail = () => {
  const { state } = useLocation();
  const { label } = state;

  const foodInfo = ["Nutrients", "Ingredients"];

  const [value, setValue] = useState(foodInfo[0]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Card elevation={0}>
        <CardContent>
          <Typography gutterBottom variant="h4" component="div" sx={{marginTop: '60px'}}>
            {label}
          </Typography>
          <Box sx={{ width: '100%', typography: 'h4' }}>
            <TabContext value={value}>
              <Box sx={{ 
                borderBottom: 1, 
                borderColor: 'divider', 
                justifyContent: 'center', 
                alignItems: 'center', 
                display: 'flex',
                marginTop: '30px',
              }}>
                <TabList onChange={handleChange} aria-label="info">
                  <Tab label={foodInfo[0]} value="1" sx={{fontSize: '18px'}} />
                  <Tab label={foodInfo[1]} value="2" sx={{fontSize: '18px'}} />
                </TabList>
              </Box>
              <TabPanel value="1">
                <Typography gutterBottom variant="h6" component="div">
                  {state.totalNutrients.CA.label} : {" "}
                  {Math.round(state.totalNutrients.CA.quantity)}
                  {state.totalNutrients.CA.unit}
                </Typography>
                <Typography gutterBottom variant="h6" component="div">
                  {state.totalNutrients.CHOCDF.label} : {" "}
                  {Math.round(state.totalNutrients.CHOCDF.quantity)}
                  {state.totalNutrients.CHOCDF.unit}
                </Typography>
                <Typography gutterBottom variant="h6" component="div">
                  {state.totalNutrients.CHOLE.label} : {" "}
                  {Math.round(state.totalNutrients.CHOLE.quantity)}
                  {state.totalNutrients.CHOLE.unit}
                </Typography>
                <Typography gutterBottom variant="h6" component="div">
                  {state.totalNutrients.ENERC_KCAL.label} : {" "}
                  {Math.round(state.totalNutrients.ENERC_KCAL.quantity)}
                  {state.totalNutrients.ENERC_KCAL.unit}
                </Typography>
                <Typography gutterBottom variant="h6" component="div">
                  Total weight : {state.totalWeight}
                </Typography>
                <Typography gutterBottom variant="h6" component="div">
                  Calories : {Math.round(state.calories)}
                </Typography>
                {state.digest.slice(0, 4).map((item, index) => (
                  <Typography gutterBottom variant="h6" key="index" component="div">
                    {item.label} : {Math.round(item.total)}
                  </Typography>
                ))}
              </TabPanel>
              <TabPanel value="2">
                {state.ingredientLines.map((ingredient, index) => (
                  <Typography gutterBottom variant="h6" key="index" component="div">
                    Step {index + 1} : {ingredient}
                  </Typography>
                ))}
              </TabPanel>
              <Divider />
            </TabContext>
          </Box>
        </CardContent>
      </Card>
    </div>
  )
}

export default Detail;