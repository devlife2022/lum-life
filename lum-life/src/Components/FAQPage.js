import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import FestivalIcon from '@mui/icons-material/Festival';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

export default function FAQPage() {


  return (


  <Grid
  	container
  	spacing={12}
  	direction="row"
  	alignItems="center"
  	justifyContent="center"
    style={{color:'white', paddingLeft:24}}
  >
   		<Grid
   			item
        xs={12}
        style={{m:4}}
   		>
        <h3>Who are the official team members?</h3>
        <p>
          
              > Somehoodlum - Creator aka Head Lum  - 

              <Link 
                href="https://discord.gg/XSHq5Savy8" 
                target="_blank"
              >
                Discord 
              </Link>  
                /
              <Link 
                href="https://twitter.com/somehoodlum" 
                target="_blank"
              >
                Twitter 
              </Link>
               / 
              <Link
                href="https://www.instagram.com/somehoodlum" 
                target="_blank"
              >
              Instagram
              </Link> 
            <br />
            <br />
              > Next Wave Records - head of management - 
              <Link 
                href="https://discord.gg/wEV3p45n" 
                target="_blank"
              >
                Discord 
              </Link>  
                /
              <Link 
                href="https://twitter.com/nextwaverecs" 
                target="_blank"
              >
                Twitter 
              </Link>
               / 
              <Link
                href="https://www.instagram.com/nextwaverecords" 
                target="_blank"
              >
              Instagram
              </Link> 

            <br />
            <br />
              > del NWR - management, guest list coordinator
        </p>
        <Divider />
        </Grid>
        <Grid
        item
        xs={12}
        style={{m:4}}
      >
        <h3>Where can I buy somehoodlum NFTs?</h3>
        <p>
          <Link
                href="https://niftygateway.com/marketplace/collection/0x93ac66945c9eacddb3ce51a5c961e9cea4baef86/1" 
                target="_blank"
              >
          > Niftygateway Catalog Drop 
          </Link>
          <br />
          <br />
          <Link
                href="https://sturdy.exchange/marketplace" 
                target="_blank"
              >
          > Hoodlums on Sturdy Exchange
          </Link>
          <br />
          <br />
 
          > Somehoodlum x Kaien Cruz Soundmint drop - TBD
        </p>
        <Divider />
        </Grid>
        <Grid
        item
        xs={12}
        style={{m:4}}
      >
        <h3>Where can I learn about Hoodlum rarity and how many were minted?</h3>
        <p>
          
          5,000 Hoodlums were minted and rarity info can be found at HoodlumsNFT -  
          <Link
                href="https://hoodlumsnft.com/" 
                target="_blank"
              >
          https://hoodlumsnft.com/
          </Link>
        </p>
        <Divider />
        </Grid>
        <Grid
        item
        xs={12}
        style={{m:4}}
      >
        <h3>How do I RSVP for hoodlum utility events?</h3>
        <p>
          
          Use the google form -
          <Link
                href="https://forms.gle/RiiDuSxn7BPepVvG9" 
                target="_blank"
          >
            https://forms.gle/RiiDuSxn7BPepVvG9
          </Link>
        </p>
        <Divider />
        </Grid>
        <Grid
        item
        xs={12}
        style={{m:4}}
      >
        <h3>How many guest list spots do I get for events?</h3>
        <p>
          
          Yourself +1, if you have a group of friends that you are going with, other members of that group must own hoodlums as well
        </p>
        <Divider />   
        </Grid>  
        <Grid
        item
        xs={12}
        style={{m:4}}
      >
        <h3>How long before an event do I have to RSVP?</h3>
        <p>
          
          The more lead time the better.  Remember that spots are first come, first serve*, so the further in advance you RSVP, the better chances you have of securing your spot.  
          <br/>
          *NBA events are not first come, first serve.  These are given out through a raffle system.
          <br/>
          <br/>
          > Festivals - you must RSVP at least a week in advance
          <br/>
          > Shows - you must RSVP at least 48 hours in advance. 
          <br/>
          
        </p>
        <Divider />
        </Grid>
        <Grid
        item
        xs={12}
        style={{m:4}}
      >
        <h3>What show access will I have?</h3>
        <p>
          
          Not every show will be VIP, we don’t have control over this. We hope for the best when you arrive to the doors in terms of access, whether or not they choose to give you GA, VIP or AA, that is up to their discretion! Somehoodlum residency dates will be a different ball game and a separate FAQ for those events will be released down the line!
        </p>
        <Divider />
        </Grid>
        <Grid
        item
        xs={12}
        style={{m:4}}
      >
        <h3>Can I loan out my hoodlum for the utility?</h3>
        <p>
          
          No loan outs until Sturdy Exchange allows trades.
        </p>
        <Divider />
        </Grid>
        <Grid
        item
        xs={12}
        style={{m:4}}
      >
        <h3>What do I show at the door to get into the events?</h3>
        <p>
          
          Everyone in attendance must have an ID, vax card if required for attendance, and it’s always best to have your email confirmation from us as well.
        </p>
        <Divider />
        </Grid>
        <Grid
        item
        xs={12}
        style={{m:4}}
      >
        <h3>Which somehoodlum nfts work for the utility?</h3>
        <p>        
          
          > Art with hoodlums holders
          <br/>
          > Catalog holders
          <br/>
          > Upcoming soundmint somehoodlum x Kaien Cruz holders
        </p>
        <Divider />
        </Grid>
        <Grid
        item
        xs={12}
        style={{m:4}}
      >
        <h3>Am I guaranteed to get into an event if I rsvp?</h3>
        <p>
          
          You are not guaranteed entry to an event until you are confirmed by a team member.
        </p>
        <Divider />
        </Grid>
        <Grid
        item
        xs={12}
        style={{m:4}}
      >
        <h3>What happens if I show up to the venue and my name is not on the list?</h3>
        <p>
          
          This is the music industry, things happen and names can fall through the cracks between confirmation with management and printing the list for the door. STAY CALM. Email delanie@nextwaverecs.com or braedon@nextwaverecs.com and let us know you’re having an issue so we can sort it out for you.
        </p>
        <Divider />
        </Grid>
        <Grid
        item
        xs={12}
        style={{m:4}}
      >
        <h3>What upcoming events can I go to?</h3>
        <p>
          
          Guest list drops happen each Wednesday unless otherwise specified.
        </p>
        <Divider />
        </Grid>
        <Grid
        item
        xs={12}
        style={{m:4}}
      >
        <h3>What upcoming somehoodlum NFT drops are there?</h3>
        <p>
          
          Soundmint somehoodlum x Kaien Cruz
        </p>
        <Divider />
        </Grid>
        <Grid
        item
        xs={12}
        style={{m:4}}
      >
        <h3>When are podcasts/guestlist drops/hanging with hoodlums twitter space/ hoodlum playlist drops?</h3>
        <p>
          
          > Podcast, GL drops, hanging with hoodlums - WEDNESDAY
          <br/> 
          > Hoodlum Playlist Drops - FRIDAY
        </p>
        <Divider />
        </Grid>
        <Grid
        item
        xs={12}
        style={{m:4}}
      >
        <h3>I saw a show I want to go to in my town, is there a way that I can get guest listed?</h3>
        <p>
          
          
          If you see that there is an event happening in your town that you want to go to, please reach out to us as far in advance as possible. There is always a chance that we can connect with the team running the event and secure guest list spots.
        </p>
  		</Grid>
  </Grid>
  );
}