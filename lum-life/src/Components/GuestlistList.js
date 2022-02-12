import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';




export default function GuestlistList() {
  return (
  <Grid
  	container
  	spacing={0}
  	direction="column"
  	alignItems="center"
  	justifyContent="center"
  >
  	<Grid item>
	    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', margin: 4}}>
	      <nav aria-label="secondary mailbox folders">
	        <List>
	          <ListItem disablePadding>
	            <ListItemButton>
	              <ListItemText primary="Testing Testing Testing" />
	            </ListItemButton>
	          </ListItem>
	          <Divider />
	          <ListItem disablePadding>
	            <ListItemButton component="a" href="#simple-list">
	              <ListItemText primary="Spam" />
	            </ListItemButton>
	          </ListItem>
	        </List>
	      </nav>
	    </Box>
    </Grid>
   </Grid>
  );
}