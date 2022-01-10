import React from 'react';
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Textarea from "@mui/material/TextareaAutosize";
import { useNavigate } from "react-router-dom";
import axios from "axios";



const Login = () => {
   

  const navigate = useNavigate();
    const [name,setName] = React.useState("");
    const [email,setEmail] = React.useState("");
    const [age,setAge] = React.useState(0);
    const [image,setImage] = React.useState("");
    const [password,setPassword] = React.useState("");

    const [emailErr,setEmailErr] = React.useState(false);
     const [passwordErr,setPasswordErr] = React.useState(false);





    const handleSubmit = (event) => {
    event.preventDefault();

   
    if (email == "") setEmailErr(true);
    if(password == "") setPasswordErr(true);


  var object = {
      email: "",
      password: ""
    };

    if ( email  && password ) {
          
         
          object.email = email;
          object.password = password;


      console.log(object);

       axios.post("http://localhost:4000/api/users/login",object).then((response) => {
           console.log(response.data);
           navigate('/login/Profile/'+response.data._id);
           alert("Successfull Loged In");
       }).catch((error) => {
           console.log(error);
       })
  }}

    return (

         <Box
      sx={{
        marginTop: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h4">
        Log In
      </Typography>
      <Box component="form" noValidate sx={{ mt: 1 }} onSubmit={handleSubmit}>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={12}>
            <TextField
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              label="Email"
              name="email"
              autoComplete="any@gmail.com"
              variant="standard"
              type="email"
              fullWidth
              error={emailErr}
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <TextField
              onChange={(e) => setPassword(e.target.value)}
              id="pass"
              label="Password"
              name="pass"
              variant="standard"
              type="password"
              fullWidth
              error={passwordErr}
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <Button color="primary" fullWidth type="submit">
              Submit
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
      );
}
 
export default Login;