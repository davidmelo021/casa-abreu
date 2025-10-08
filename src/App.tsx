import { useState } from 'react';
import Header from './components/Header';
import { Sidebar } from './components/Menu';

function App() {
  
  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = () => setOpenMenu(!openMenu);

  return (
    <>
      <Header toggleMenu={toggleMenu} />
      <Sidebar open={openMenu} />
      <div style={{ 
        marginTop: '70px',            
        marginLeft: openMenu ? '220px' : '0',  
        transition: 'margin-left 0.3s ease',
        padding: '20px'
      }}>
        <h2>Bem-vindo à Casa Abreu</h2>
        <p>Encontre tudo para sua obra com qualidade e bom preço.</p>
        <div style={{ height: '1500px' }} />
      </div>
    </>
  );
}

export default App;
