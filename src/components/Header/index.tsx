import {useSearch} from '../../context/SearchContext';
import {useNavigate} from 'react-router-dom';
import { 
  CompanyName,
  HeaderContainer,
  LeftSide, 
  HamburgerContainer, 
  HamburgerImage, 
  Logo, 
  LogoContainer, 
  SearchBar
} from './styles';
import LogoImg from '../../assets/trabalhador-da-construcao-civil-trabalhando-com-uma-pa-ao-lado-da-pilha-de-material.png';
import HamburgerImg from '../../assets/parquet.png';
import CartIcon from '../CartIcon';

interface HeaderProps {
  toggleMenu: () => void;
  toggleCart: () => void;
}

function Header({ toggleMenu,toggleCart }: HeaderProps) {
  const {query, setQuery} = useSearch(); 
  const navigate = useNavigate();

  function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
    setQuery(e.target.value);
    if (e.target.value.trim()){
      navigate('/products');
    }
  }

  return (
    <HeaderContainer>
      <HamburgerContainer>
        <LeftSide>
          <HamburgerImage src={HamburgerImg} alt="Menu" onClick={toggleMenu} />
          <LogoContainer>
            <Logo src={LogoImg} />
          </LogoContainer>
          <CompanyName />
        </LeftSide>

        <SearchBar>
          <span>🔍</span>
          <input
            type="text"
            placeholder="Buscar produtos..."
            value={query}
            onChange={handleSearch}
          />
          {query && (
            <span
              style={{ cursor: 'pointer' }}
              onClick={() => setQuery('')}
            >✕</span>
          )}
        </SearchBar>

        <CartIcon toggleCart={toggleCart} />
      </HamburgerContainer>
    </HeaderContainer>
  );
}

export default Header;
