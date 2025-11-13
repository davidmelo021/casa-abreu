import { useState } from 'react';
import Header from './components/Header';
import { Sidebar } from './components/Menu';
import { AppRoutes } from './routes/routes';
import { LoginButton } from './components/LoginButton'; 
import { BrowserRouter } from 'react-router-dom';

function App() {
  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = () => setOpenMenu(!openMenu);

  return (
    <BrowserRouter>
      <Header toggleMenu={toggleMenu} />
      <Sidebar open={openMenu} />

      <div
        style={{
          marginTop: '70px',
          marginLeft: openMenu ? '220px' : '0',
          transition: 'margin-left 0.3s ease',
        }}
      >
       
        <AppRoutes />
      </div>

      
      <LoginButton />
    </BrowserRouter>
  );
}

export default App;