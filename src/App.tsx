import { useState } from 'react';
import Header from './components/Header';
import { Sidebar } from './components/Menu';
import Home from './pages/home';
import { BrowserRouter } from 'react-router-dom';
import {AppRoutes} from './routes/routes';

function App() {
  
  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = () => setOpenMenu(!openMenu);

  return (
    <>
      <BrowserRouter>
      <Header toggleMenu={toggleMenu} />
      <Sidebar open={openMenu} />
      <div
        style={{
          marginTop: '70px', // espaço pro header fixo
          marginLeft: openMenu ? '220px' : '0', // move o conteúdo quando o menu abre
          transition: 'margin-left 0.3s ease',
        }}
      >
        <AppRoutes/>
        <Home />
      </div>
      </BrowserRouter>
    </>
  );
}

export default App;
