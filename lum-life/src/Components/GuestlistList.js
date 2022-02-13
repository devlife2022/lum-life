import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import firebase from "firebase/compat/app";



export default function GuestlistList() {

const [guestlists, setGuestlists] = useState();

useEffect(() => {
firebase.firestore()
.collection("guestlists")
.get()
.then(guestlists => {
	console.log(guestlists.docs.event_name);
	setGuestlists(guestlists.docs)
	console.log(guestlists.docs[0].data())
});
}, []);


  return (
  <Grid
  	container
  	spacing={0}
  	direction="column"
  	alignItems="center"
  	justifyContent="center"
  >

  <Grid item>
  	<Box sx={{marginTop: 4}}>
  		<h1 style={{color:'white'}}>Weekly Guestlist</h1>
  	</Box>
  </Grid>

  	<Grid item>
	    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', margin: 4}}>
	      <nav aria-label="secondary mailbox folders">
	        <List disablePadding>

	        {
    		guestlists && guestlists.map(guestlist => {
    		return(
    			<div>
    			<ListItem disablePadding key={guestlist.id}>
    				 <ListItemButton>
    				 	<ListItemText>
    				 	{new Date(guestlist.data().event_date.seconds * 1000).toLocaleDateString("en-us")} - {guestlist.data().event_name} - {guestlist.data().event_city}
    				 	</ListItemText>
    			 	</ListItemButton>

	          </ListItem>
	          <Divider />
	          </div>
	          )
    	})}
	        </List>
	      </nav>
	    </Box>
    </Grid>
    <Grid item>
    	
    </Grid>
   </Grid>
  );
}