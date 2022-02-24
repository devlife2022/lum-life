import Grid from '@mui/material/Grid';

export default function HistoryPage() {


  return (


  <Grid
  	container
  	spacing={1}
  	direction="row"
  	alignItems="center"
  	justifyContent="center"
    style={{color:'white', padding: 24}}
  >
   		<Grid
   			item
        style={{m:4}}
   		>
          <h3>Coming soon!</h3>
              
        <p>
          This page will show the timeline of events and contain additional information around the Lum universe.
          <br/>
          > When was the original mint and how much was it?
          <br/>
          > When was the VIP mint and what does it mean?
          <br/>
          > When was the catalog drop?
          <br/>
          > When was the guitar airdrop?
          <br/>
          etc.

        </p>

  		</Grid>
  </Grid>
  );
}