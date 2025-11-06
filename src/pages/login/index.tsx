import {useState} from 'react';            
import {Container,Header,Logo,LoginSection,Form, Input, Button, GoogleButton,  } from './styles';
import  LogoImg  from '../../assets/trabalhador-da-construcao-civil-trabalhando-com-uma-pa-ao-lado-da-pilha-de-material.png';
import GoogleImg from '../../assets/OIP (1).webp';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
     const [showForm, setShowForm] = useState(false);

     const handleLoginClick = () => setShowForm(!showForm);

    const handleLogin = (e:React.FormEvent) => {
        e.preventDefault();
        alert(`Email:${email} Password: ${password}`)
    }
    
    const handleGoogleLogin = () => {
        alert('Login com Google iniciado')
    }
    
    return (
        <Container>
            <Header>
                <Logo>
                    <img
                        src={LogoImg}
                        alt=''
                    />
                    <h1>Casa Abreu</h1>
                </Logo>
                <LoginSection>
                    <button onClick={handleLoginClick}>Login</button>
                </LoginSection>
            </Header>

            {showForm && (
                <Form onClick={handleLogin}>
                    <label>Email</label>
                    <Input 
                        type='email'
                        placeholder='Digite seu email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <label>Senha</label>
                    <Input
                        type='password'
                        placeholder='Digite sua senha'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <Button type="submit">Entrar</Button>
                    <GoogleButton>
                        <img
                            src={GoogleImg}
                            alt=''
                        />
                    </GoogleButton>
                </Form>
            )}
        </Container>
    )

}

export default Login;