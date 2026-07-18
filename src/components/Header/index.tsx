import {useSearch} from '../../context/SearchContext';
import {useNavigate} from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { 
  CompanyName,
  HeaderContainer,
  LeftSide, 
  HamburgerContainer, 
  HamburgerImage, 
  Logo, 
  LogoContainer, 
  SearchBar,
  UserInfo,Avatar,UserName
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

  const { isLogado, nome } = useAuth();

const iniciais = nome
  ? nome.split(' ').map((n: string) => n[0]).slice(0, 2).join('').toUpperCase()
  : '';

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
            <span style={{ cursor: 'pointer' }} onClick={() => setQuery('')}>✕</span>
          )}
        </SearchBar>

        <LeftSide>
          {isLogado && (
            <UserInfo>
              <Avatar>{iniciais}</Avatar>
              <UserName>{nome}</UserName>
            </UserInfo>
          )}
          <CartIcon toggleCart={toggleCart} />
        </LeftSide>
      </HamburgerContainer>
    </HeaderContainer>
  );
}

export default Header;
