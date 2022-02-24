
import ResponsiveAppBar from './Components/Header.js';
import { Outlet, Link, Route, Routes } from "react-router-dom";
import LandingPage from './Components/LandingPage.js';
import FAQPage from './Components/FAQPage.js';

function App() {
  return ( 
    <div>         
      <div>
        <ResponsiveAppBar />
      </div>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/FAQ' element={<FAQPage />} />
      </Routes>
    </div>
  );
}

export default App;
