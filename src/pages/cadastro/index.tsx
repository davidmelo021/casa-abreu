import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {Container, Box, Title, Input, Label, Button} from '../../pages/login/styles';

export default function Cadastro() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmaPassword, setConfirmaPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);
    const navigate = useNavigate();

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setError('');

        if(password !== confirmaPassword) {
            setError('As senhas não coincidem');
            return;
        }

        try {
            const response = await fetch('http://localhost:3000/api/cadastro',{
                method:'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({name, email, password}),
            });

            if(!response.ok) {
                const err = await response.json();
                throw new Error(err.message );
            }
            setSuccess(true);
            setTimeout(() => navigate('/login') ,2000);
        } catch (err:any) {
            setError(err.message);
        }
    }

    return (
        <Container>
            <Box>
                <Title>Cadastrar</Title>
                {   success ? (
                    <p style={{color:'green',fontSize:'1rem'}}>
                        Cadastro realizado! Redirecionando para o login...
                    </p>
                ) : (
                    <form onSubmit={handleSubmit}>
                        <Label>Nome</Label>
                        <Input
                            type="text"
                            placeholder="Digite seu nome"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />

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

                        <Label>Confirme a Senha</Label>
                        <Input
                            type="password" 
                            placeholder="Confirme sua senha"
                            value={confirmaPassword}
                            onChange={(e) => setConfirmaPassword(e.target.value)}
                            required
                        />

                        {error && <p style={{color:'red',fontSize: '0.9rem', marginTop: '8px'}}>{error}</p>}
                        <Button type="submit">Criar sua conta</Button>
                    </form>
                )}

                <p style={{ marginTop: '16px', fontSize: '0.9rem', color: '#555' }}>
                     Já tem conta?{' '}
                     <span
                        onClick={() => navigate('/login')}
                        style={{color: '#ff6600', cursor: 'pointer', fontWeight: 600}}
                     >
                        Entrar
                     </span>
                </p>
            </Box>
        </Container>
    );
}