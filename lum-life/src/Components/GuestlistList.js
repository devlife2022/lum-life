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
import FestivalIcon from '@mui/icons-material/Festival';
import GuestlistLegend from './GuestlistLegend.js';
import Link from '@mui/material/Link';

export default function GuestlistList() {

const [currentGuestlists, setCurrentGuestlists] = useState();
const [pastGuestlists, setPastGuestlists] = useState();




const currentDate = new Date(new Date().setHours(0,0,0,0))


useEffect(() => {
firebase.firestore()
.collection("guestlists")
.where('event_date', '>=', currentDate)
.get()
.then(guestlists => {
	console.log(currentDate)
	setCurrentGuestlists(guestlists.docs)
	console.log(guestlists.docs[0].data().event_date)

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
        <div style={{fontSize: '24px', color: '#3e3e3e'}}>
        	Current Guestlists
        </div>
  	</Box>
  </Grid>
  <Grid item>
  	<Box sx={{marginTop: 4}}>
        <div style={{fontSize: '14px', color: '#3e3e3e'}}>
        	(Somehoodlum art owners use <Link href="https://forms.gle/RiiDuSxn7BPepVvG9" target="_blank">  this form </Link> to RSVP for event)
        </div>
  	</Box>
  </Grid>
  <Grid item>
  	<Box sx={{marginTop: 4}}>
        <GuestlistLegend />
  	</Box>
  </Grid>

  	<Grid item>
	    <Box sx={{  maxWidth: 500,  bgcolor: 'white', margin: 4}}>
	      <nav aria-label="secondary mailbox folders">
	        <List disablePadding>
	        {
		    		currentGuestlists && currentGuestlists.sort((a,b) => b.data().event_date.seconds - a.data().event_date.seconds).map(guestlist => {
		    		return(
		    			<div key={guestlist.id}>
		    				<ListItem divider disablePadding >
		    					<ListItemButton>
			    					<ListItemIcon >
	                		{guestlist.data().event_type == "NBA" ? <SportsBasketballIcon sx={{color: '#f5876e'}} /> :  guestlist.data().event_type == "Music" ?  <MusicNoteIcon sx={{color: '#649f9a'}} />  :  <FestivalIcon sx={{color: '#4FA862'}} />}
	              		</ListItemIcon>
		    				 		<ListItemText 
		    				 			primaryTypographyProps={{fontSize: '0.9em'}}
		    				 			primary={ guestlist.data().event_type == "Music Festival" ? new Date(guestlist.data().event_date.seconds * 1000).toLocaleDateString("en-us") + "  -  " + new Date(guestlist.data().event_end_date.seconds * 1000).toLocaleDateString("en-us")  + " - " + guestlist.data().event_name   : new Date(guestlist.data().event_date.seconds * 1000).toLocaleDateString("en-us") + "  -  " + guestlist.data().event_name}
		    				 			secondary={guestlist.data().event_state == "" ? guestlist.data().event_city + ", " + guestlist.data().event_country : guestlist.data().event_city + ", " + guestlist.data().event_state}	
		    				 			 >
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
	    <Box sx={{  maxWidth: 500,  bgcolor: 'white', margin: 4}}>
	      <nav aria-label="secondary mailbox folders">
	        <List disablePadding>
	        {
		    		pastGuestlists && pastGuestlists.sort((a,b) => b.data().event_date.seconds - a.data().event_date.seconds).map(guestlist => {
		    		return(
		    			<div key={guestlist.id}>
		    				<ListItem divider disablePadding >
		    					<ListItemButton>
			    					<ListItemIcon >
	                		{guestlist.data().event_type == "NBA" ? <SportsBasketballIcon sx={{color: '#f5876e'}} /> :  guestlist.data().event_type == "Music" ?  <MusicNoteIcon sx={{color: '#649f9a'}} />  :  <FestivalIcon sx={{color: '#4FA862'}} />}
	              		</ListItemIcon>
		    				 		<ListItemText 
		    				 			primaryTypographyProps={{fontSize: '0.9em'}}
		    				 			primary={ guestlist.data().event_type == "Music Festival" ? new Date(guestlist.data().event_date.seconds * 1000).toLocaleDateString("en-us") + "  -  " + new Date(guestlist.data().event_end_date.seconds * 1000).toLocaleDateString("en-us")  + " - " + guestlist.data().event_name   : new Date(guestlist.data().event_date.seconds * 1000).toLocaleDateString("en-us") + "  -  " + guestlist.data().event_name}
		    				 			secondary={guestlist.data().event_state == "" ? guestlist.data().event_city + ", " + guestlist.data().event_country : guestlist.data().event_city + ", " + guestlist.data().event_state}	
		    				 			 >
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