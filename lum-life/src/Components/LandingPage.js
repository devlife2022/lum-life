import Box from '@mui/material/Box';
import GuestlistList from './GuestlistList.js';
import LandingPageHeroImage from './LandingPageHeroImage.js';


export default function LandingPage() {


  return (
    <div>         
      <Box sx={{justifyContent:'center', paddingLeft: 3, paddingRight: 3}} >
        <LandingPageHeroImage/>
      </Box>
      <Box sx={{justifyContent:'center', paddingLeft: 3, paddingRight: 3}} >
        <GuestlistList />
      </Box>
    </div>
  );
}
