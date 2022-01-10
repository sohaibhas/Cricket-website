import React from 'react';
import Typography from '@mui/material/Typography';
import Grid from "@mui/material/Grid";
import ProfileTopMenu from "./profileTopMenu";
import axios from "axios";
import Paper from "@mui/material/Paper";

import Container from "@mui/material/Container";

import {useLocation} from "react-router-dom";


const Profile = () => {


    const location = useLocation();
    const [user,setUser] = React.useState({});



    const generateUser = () =>{
         
         const id = location.pathname.split('/')[3];
         console.log(id);

         axios.get("http://localhost:4000/api/users/"+id).then((res)=>{
             console.log(res.data);
             setUser(res.data);
         }).catch((err)=>{
             console.log(err);
         })

        
    }

  

     React.useEffect(generateUser,[]);



    return (  
       <Container>
        <ProfileTopMenu name={user.name} />

        <Grid container>
          <Typography variant="h3">My Profile</Typography>
        <Grid sm={6} lg={6}>
           <Paper>
               <img src={user.img} />
           </Paper>
        </Grid>
         
         <Grid sm={6} lg={6}>
          <Paper elevation={3}>
            <Typography>{user.name}</Typography>
            <Typography>{user.email}</Typography>
            <Typography>{user.age}</Typography>
            <Typography>{user.createdAt}</Typography>
            </Paper >
        </Grid>
        </Grid >  


       <hr />
       <hr />

    

        </Container>
    );
}
 
export default Profile;