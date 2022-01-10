import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function HomeCard() {
  return (
   <Card sx={{ minWidth: 375 }} color="primary" style={{ marginTop:"4rem"}} >
      <CardContent
              
      >
        <Typography sx={{ fontSize: 60 }} color="text.secondary" gutterBottom style={{ marginTop:"2rem",textAlign: "center" }}>
              A&U Crickets
        </Typography>
        <Typography variant="h5" component="div">
        www.a&u.com
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Our Services:
        </Typography>
        <Typography variant="body1">
            
          <br />
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">About Us</Button>
      </CardActions>
    </Card>    
  );
}
