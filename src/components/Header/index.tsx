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

interface HeaderProps {
  toggleMenu: () => void;
}

function Header({ toggleMenu }: HeaderProps) {
  return (
    <Container>
      {/* Hamburger + Logo lado a lado */}
      <HamburgerContainer>
        <HamburgerImage src={HamburgerImg} alt="Menu" onClick={toggleMenu} />
        <LogoContainer>
          <Logo src={LogoImg} />
        </LogoContainer>
        <CompanyName>
         
        </CompanyName>
      </HamburgerContainer>
    </Container>
  );
}

export default Header;
