import logo from './logo.svg';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ResponsiveAppBar from './Components/Header.js';
import GuestlistList from './Components/GuestlistList.js';


function App() {
  return ( 
    <div>         
      <div>
        <ResponsiveAppBar />
      </div>
      <Box sx={{justifyContent:'center'}} >
        <GuestlistList />
      </Box>
    </div>
  );
}

export default App;
