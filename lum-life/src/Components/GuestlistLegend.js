import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import FestivalIcon from '@mui/icons-material/Festival';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';

export default function GuestlistLegend() {


  return (


  <Grid
  	container
  	spacing={1}
  	direction="row"
  	alignItems="center"
  	justifyContent="center"
  >
   		<Grid
   			item
   		>
  			<Chip icon={<SportsBasketballIcon />} label='NBA' sx={{backgroundColor: 'white'}}/>

  		</Grid>

  	<Grid
  		item
  	>
  		<Chip icon={<MusicNoteIcon />} label='Concert/Club' sx={{backgroundColor: 'white'}} />

  	</Grid>

  
  	<Grid
  		item
  	>
  		<Chip icon={<FestivalIcon />} label='Music Festival' sx={{backgroundColor: 'white'}} />

  	</Grid>

  </Grid>
  );
}