import { 
  CompanyName,
  HeaderContainer,
  LeftSide, 
  HamburgerContainer, 
  HamburgerImage, 
  Logo, 
  LogoContainer 
} from './styles';
import LogoImg from '../../assets/trabalhador-da-construcao-civil-trabalhando-com-uma-pa-ao-lado-da-pilha-de-material.png';
import HamburgerImg from '../../assets/parquet.png';
import CartIcon from '../CartIcon';

interface HeaderProps {
  toggleMenu: () => void;
  toggleCart: () => void;
}

function Header({ toggleMenu,toggleCart }: HeaderProps) {
  return (
    <HeaderContainer>
      <HamburgerContainer>
        <LeftSide>
         <HamburgerImage src={HamburgerImg} alt="Menu" onClick={toggleMenu} />
          <LogoContainer>
            <Logo src={LogoImg} />
          </LogoContainer>
          <CompanyName/>
        </LeftSide>
        
        <CartIcon toggleCart={toggleCart} />
      </HamburgerContainer>
    </HeaderContainer>
  );
}

export default Header;
