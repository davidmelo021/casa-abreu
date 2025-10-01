import {Container,LogoContainer,ButtonContainer,ButtonIcon} from './styles';
import Logo from '../../assets/construcao.png';

function Header(){
   return(
    <Container>
        <LogoContainer>
            <ButtonContainer>
                <ButtonIcon/>
            </ButtonContainer>
            <img 
              style={{ cursor: 'pointer', width: '100px' }}
              alt=""
              src={Logo}
            />
            <h1>Casa Abreu</h1>
        </LogoContainer>
    </Container>
   ) 
}

export default Header;