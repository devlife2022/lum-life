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
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import MusicNoteIcon from '@mui/icons-material/MusicNote';

export default function GuestlistList() {

const [currentGuestlists, setCurrentGuestlists] = useState();
const [currentGuestlistsSorted, setCurrentGuestlistsSorted] = useState();
const [pastGuestlists, setPastGuestlists] = useState();
const [pastGuestlistsSorted, setPastGuestlistsSorted] = useState();



const currentDate = new Date(Date.now())

useEffect(() => {
firebase.firestore()
.collection("guestlists")
.where('event_date', '>', currentDate)
.get()
.then(guestlists => {
	setCurrentGuestlists(guestlists.docs)
	console.log(guestlists.docs[0].data())

});
}, []);


useEffect(() => {
firebase.firestore()
.collection("guestlists")
.where('event_date', '<', currentDate)
.get()
.then(guestlists => {
	setPastGuestlists(guestlists.docs)
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
  		<Divider style={{width: '100%'}}>
        <div style={{fontSize: '24px', color: '#3e3e3e'}}>
        	Current Guestlists
        </div>
      </Divider>
  	</Box>
  </Grid>

  	<Grid item>
	    <Box sx={{  maxWidth: 500, minWidth: 450, bgcolor: 'white', margin: 4}}>
	      <nav aria-label="secondary mailbox folders">
	        <List disablePadding>
	        {
		    		currentGuestlists && currentGuestlists.sort((a,b) => b.data().event_date.seconds - a.data().event_date.seconds).map(guestlist => {
		    		return(
		    			<div key={guestlist.id}>
		    				<ListItem divider disablePadding >

		    					<ListItemIcon style={{minWidth: '0px', margin: 2}}>
                		{guestlist.data().event_type == "NBA" ? <SportsBasketballIcon sx={{color: '#f5876e'}} /> : <MusicNoteIcon sx={{color: '#649f9a'}} />}
              		</ListItemIcon>


		    					<ListItemButton>
		    				 		<ListItemText primaryTypographyProps={{fontSize: '0.75em'}} >
		    				 			{new Date(guestlist.data().event_date.seconds * 1000).toLocaleDateString("en-us")} - {guestlist.data().event_name} - {guestlist.data().event_city}
		    				 		</ListItemText>
		    			 		</ListItemButton>
			          </ListItem>
			        </div>
			          )
    			})}
	        </List>
	      </nav>
	    </Box>
    </Grid>

    <Grid item>
  	<Box sx={{marginTop: 4}}>
  		<Divider style={{width: '100%'}}>
        <div style={{fontSize: '24px', color: '#3e3e3e'}}>
        	Past Guestlists
        </div>
      </Divider>
  	</Box>
  </Grid>

    <Grid item>
    	 <Box sx={{  maxWidth: 500, minWidth: 450, bgcolor: 'background.paper', margin: 4}}>
	      <nav aria-label="secondary mailbox folders">
	        <List disablePadding>
	        {
		    		pastGuestlists && pastGuestlists.sort((a,b) => b.data().event_date.seconds - a.data().event_date.seconds).map(guestlist => {
		    		return(
		    			<div key={guestlist.id}>
		    				<ListItem divider disablePadding >
		    					<ListItemIcon style={{minWidth: '0px', margin: 2}}>
                		{guestlist.data().event_type == "NBA" ? <SportsBasketballIcon sx={{color: '#f5876e'}} /> : <MusicNoteIcon sx={{color: '#649f9a'}} />}
              		</ListItemIcon>
		    					<ListItemButton>
		    				 		<ListItemText primaryTypographyProps={{fontSize: '0.75em'}} >
		    				 			{new Date(guestlist.data().event_date.seconds * 1000).toLocaleDateString("en-us")} - {guestlist.data().event_name} - {guestlist.data().event_city}
		    				 		</ListItemText>
		    			 		</ListItemButton>
			          </ListItem>
			        </div>
			          )
    			})}
	        </List>
	      </nav>
	    </Box>
    </Grid>


   </Grid>
  );
}