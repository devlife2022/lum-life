import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import VegasFlyer from '../Assets/VegasEvent2022.jfif';
import Grid from '@mui/material/Grid';


export default function LandingPageHeroImage() {

  return (


  <Grid
  	container
  	spacing={0}
  	direction="column"
  	alignItems="center"
  	justifyContent="center"
  >
  	<Grid item align="center">
  		<Box sx={{m: 4, maxWidth: 600}} >
      	<img style={{width: '75%', height: '25%'}} src={VegasFlyer}  />
    	</Box>
    </Grid>
  	
  </Grid>
  );
}