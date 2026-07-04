import {useState} from 'react';
import {useAuth} from '../../context/AuthContext';
import {useNavigate} from 'react-router-dom';            
import {Container,Box,Title, Input, Label, Button, GoogleButton,  } from './styles';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();
    
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        try {
            await login(email, password);
            navigate('/');
        } catch (error:any) {
            setError(error.message );
        }
    };

    return (
        <Container>
            <Box>
                <Title>Entrar</Title>
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
                    {error && <p style={{ color: 'red', fontSize: '0.9rem' }}>{error}</p>}
                    <Button type="submit">Entrar</Button>
                </form>

                <GoogleButton>Entrar com Google</GoogleButton>

                <p style={{ marginTop: '16px', fontSize: '0.9rem', color: '#555'}}>
                    Não tem conta ?{' '}
                    <span
                        onClick={() => navigate('/cadastro')}
                        style={{color: '#ff6600', cursor: 'pointer', fontWeight: 600}}
                    >
                        Cadastre-se
                    </span>
                </p>
            </Box>
        </Container>
    );
};
export default Login;