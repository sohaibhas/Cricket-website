import React from 'react';
import SingleProduct from './SingleProduct'
import axios from 'axios'
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";




const Products = () => {
    
   const [products, setProduct]  = React.useState([]);


   const getProduct = () =>{
      axios.get("http://localhost:4000/api/products").then((response) =>{
          console.log(response.data);
            setProduct(response.data);
      }).catch((error) =>{
          console.log(error);
      })
   }

   
   React.useEffect(getProduct,[]);


    return ( <div>
    
        <Container>
         <Grid container spacing={10}>

         <Grid item sm={12} >

            <Typography variant="h3" color="secondary" style={{textAlign: 'center',paddingTop: '3rem'}}>Our Products</Typography>  

            </Grid>


         
            {products.map((product,index)=>
             <Grid item sm={4} md={4}>
               <SingleProduct key={index} product={product}/>
               </Grid>
            )}

          


         </Grid>
         </Container>
          
    </div> );
}
 
export default Products;