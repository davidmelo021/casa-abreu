import { useState } from 'react';
import Header from './components/Header';
import { Sidebar } from './components/Menu';
import { AppRoutes } from './routes/routes';
import { LoginButton } from './components/LoginButton'; 
import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { ProductCard } from './components/ProdutCard';

function App() {
  const [openMenu, setOpenMenu] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  
  const toggleMenu = () => setOpenMenu(!openMenu);
  const toggleCart = () => setOpenCart(!openCart);

  
  return (
    <BrowserRouter>
      <CartProvider>
        <Header toggleMenu={toggleMenu} toggleCart={toggleCart} />

        <Sidebar open={openMenu} />
        <ProductCard 
          image="" 
          title="" 
          price=""
        />

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
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;