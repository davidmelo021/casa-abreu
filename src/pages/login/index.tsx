import {useState} from 'react';            
import {Container,Box,Title, Input, Label, Button, GoogleButton,  } from './styles';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert(`Email: ${email}\nPassword: ${password}`);
    };

    return (
        <Container>
            <Box>
                <Title>Login</Title>
                <form onSubmit={handleSubmit}>
                    <Label>Email</Label>
                    <Input
                        type="email"
                        placeholder="Digite seu email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />

                    <Label>Senha</Label>
                    <Input
                        type="password"
                        placeholder="Digite sua senha"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />

                    <Button type="submit">Entrar</Button>
                </form>

                <GoogleButton>Entrar com Google</GoogleButton>
            </Box>
        </Container>
    );
};
export default Login;