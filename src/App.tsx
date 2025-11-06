import { useState } from 'react';
import Header from './components/Header';
import { Sidebar } from './components/Menu';
import Home from './pages/home';

import {AppRoutes} from './routes/routes';
import Login from './pages/login';

function App() {
  
  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = () => setOpenMenu(!openMenu);

  return (
    <>
      <div>
        
      <Header toggleMenu={toggleMenu} />
      <Sidebar open={openMenu} />
       <div style={{marginTop: '70px',  marginLeft: openMenu ? '220px' : '0', transition: 'margin-left 0.3s ease'}}>

       </div>
        <AppRoutes/>
        <Home />
        <Login/>

      </div>
    </>
  );
}

export default App;
