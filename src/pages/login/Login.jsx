import "./Login.css"
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { 
  FormControl, 
  Paper, 
  TextField, 
  Button, 
  Card, 
  CardContent, 
  CardActions } from '@mui/material';

const Login = () => {
  const user = { 
    username: "", 
    password: "",
  };

  const [username , setUsername] = useState("");
  const [password , setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/");

    user.username = username;
    user.password = password;

    localStorage.setItem("user", JSON.stringify(user));

    setUsername("");
    setPassword("");
  }
  return (
    <div className="loginWrapper">
      <Paper elevation={2} className="paperWrapper">
        <FormControl className="formWrapper">
          <Card elevation={0}>
            <CardContent className="cardContentWrapper">
              <TextField type="text" id="outlined-basic" label="User name"  variant="outlined" className="textField" value={username} onChange={(e) => setUsername(e.target.value)} />
              <TextField type="password" id="outlined-basic" label="Password" variant="outlined" className="textField" value={password} onChange={(e) => setPassword(e.target.value)} />
            </CardContent>
            <CardActions classes={{ root: "justifyCenter" }}>
              <Button variant="contained" color="primary" size="medium" onClick={handleSubmit}>Submit</Button>
            </CardActions>
          </Card>
        </FormControl>
      </Paper>
    </div>
  )
}


export default Login;