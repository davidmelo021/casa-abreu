import { 
  CompanyName,
  Container, 
  HamburgerContainer, 
  HamburgerImage, 
  Logo, 
  LogoContainer 
} from './styles';
import LogoImg from '../../assets/trabalhador-da-construcao-civil-trabalhando-com-uma-pa-ao-lado-da-pilha-de-material.png';
import HamburgerImg from '../../assets/parquet.png';
import CartIcon from "../../components/CartIcon";

interface HeaderProps {
  toggleMenu: () => void;
  toggleCart: () => void;
}

function Header({ toggleMenu,toggleCart }: HeaderProps) {
  return (
    <Container>
      <HamburgerContainer>
        <HamburgerImage src={HamburgerImg} alt="Menu" onClick={toggleMenu} />
        <LogoContainer>
          <Logo src={LogoImg} />
        </LogoContainer>
        <CompanyName> </CompanyName>
        <CartIcon toggleCart={toggleCart} />
      </HamburgerContainer>
    </Container>
  );
}

export default Header;
