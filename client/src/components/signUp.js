
import React from "react";
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
import axios from "axios"








const SignUp = () => {
   
  const navigate = useNavigate();
    const [name,setName] = React.useState("");
    const [email,setEmail] = React.useState("");
    const [age,setAge] = React.useState(0);
    const [date,setDate] = React.useState();
    const [image,setImage] = React.useState("");
    const [password,setPassword] = React.useState("");

     const [nameErr,setNameErr] = React.useState(false);
    const [emailErr,setEmailErr] = React.useState(false);
    const [ageErr,setAgeErr] = React.useState(false);
    const [dateErr,setDateErr] = React.useState(false);
    const [imageErr,setImageErr] = React.useState(false);
     const [passwordErr,setPasswordErr] = React.useState(false);





    const handleSubmit = (event) => {
    event.preventDefault();

    if (name == "") setNameErr(true);
    if (email == "") setEmailErr(true);
    if (age == "") setAgeErr(true);
    if (date == "") setDateErr(true);
    if (image == "") setImageErr(true);
    if(password == "") setPasswordErr(true);


  var object = {
      name: "",
      email: "",
      password: "",
      age: "",
      img: "",
    };

    if (name && email  && image && age) {
          
          object.name = name;
          object.email = email;
          object.password = password;
          object.age = age;
          object.img = image;


      console.log(object);

       axios.post("http://localhost:4000/api/users",object).then((response) => {
            console.log(response);
           alert("Successfull Added");
           navigate("/login");
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
        marginTop:"3rem",
        marginLeft:"25rem",
        marginRight:"25rem"
      }}
    >
      <Avatar sx={{ m: 2, bgcolor: "secondary.main" }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h4">
        Sign Up
      </Typography>
      <Box component="form" noValidate sx={{ mt: 1 }} onSubmit={handleSubmit} >
        <Grid container spacing={1} styles={{margin:"3rem"}}>
          <Grid item xs={12} sm={12}>
            <TextField
              onChange={(e) => {
                setName(e.target.value);
                console.log(e.target.value);
              }}
              id="name"
              label="Name"
              name="name"
              autoComplete="Name.."
              variant="standard"
              fullWidth
              error={nameErr}
            />
          </Grid>
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
            <TextField
              onChange={(e) => setAge(e.target.value)}
              id="age"
              label="Age"
              name="age"
              autoComplete="0"
              variant="standard"
              type="number"
              fullWidth
              error={ageErr}
            />
          </Grid>


          <Grid item xs={12} sm={12}>
            <TextField
              onChange={(e) => setDate(e.target.value)}
              id="date"
              label="Date"
              name="date"
              autoComplete="00:00:00"
              type="date"
              variant="filled"
              error={dateErr}
              fullWidth
            />
          </Grid>

          <Grid item xs={12} sm={12}>
            <TextField
              onChange={(e) => setImage(e.target.value)}
              id="img"
              label="Image Link"
              name="img"
              autoComplete="This a img"
              variant="standard"
              fullWidth
              error={imageErr}
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
 
export default SignUp;