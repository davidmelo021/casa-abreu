import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {useCart} from '../../context/CartContext';
import {useAuth} from '../../context/AuthContext';
import {Container, Title, Section,SectionTitle,Label,
    Input,Grid2,
} from './styles';

type Pagamento = 'credito' | 'debito' | 'pix'| 'boleto';

export default function Checkout() {
    const {cart, clearCart} = useCart();
    const {token,isLogado} = useAuth();
    const navigate = useNavigate();

    const [pagamento, setPagamento] = useState<Pagamento>('credito');
    const [bandeira,setBandeira] = useState('visa');
    const [parcelas,setParcelas] = useState(1);

    const [name,setName] = useState('');
    const [cpf,setCpf] = useState('');
    const [email,setEmail] = useState('');
    const [cep,setCep] = useState('');
    const [endereco,setEndereco] = useState('');
    const [numero,setNumero] = useState('');
    const [bairro,setBairro] = useState('');
    const [cidade,setCidade] = useState('');
    const [estado,setEstado] = useState('');

    const [numeroCartao,setNumeroCartao] = useState('');
    const [nameCartao,setNameCartao] = useState('');
    const [validadeCartao,setValidadeCartao] = useState('');
    const [cvvCartao,setCvvCartao] = useState('');

    const total = cart.reduce((acc,item) => acc + item.price * item.quantity, 0);
    const parcela = (total/parcelas).toFixed(2);

    async function finalizar () {
        if (!isLogado) {
            navigate('/login');
            return;
        }

        if (!name || !cpf || !email ||  !endereco || !numero || !bairro || !cidade || !estado) {
            alert('Por favor, preencha todos os campos.');
            return;
        }

        try {
            const itens = cart.map(item => ({
                name: item.name,
                price: item.price,
                quantity: item.quantity,
            }));

            const response = await fetch('http://localhost:3000pedidos', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify({itens,total}),
            });

            if (!response.ok) throw new Error('Erro ao finalizar pedido');
            
            const data = await response.json();
            const itensSalvo = [...cart];

            clearCart();
            navigate('confirmacao', {
                state: {
                    pedidoId : data.pedidoId,
                    itens: itensSalvo,
                    total,
                    pagamento,
                    bandeira: pagamento ==='credito' || pagamento === 'debito' ? bandeira : null,
                    parcelas: pagamento ==='credito' ? parcelas : 1,
                    valorParcela: pagamento ==='credito' ? valorParcela : null,
                }
            });
        } catch (error) {
            alert('Erro ao finalizar compra. Tente novamente.');
        }
    }

    return (
        <Container>
            <Title>Finalizar Compra</Title>

            <div>
                <Section>
                    <SectionTitle>Informações Pessoais</SectionTitle>
                    <Label>Nome Completo</Label>
                    <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Seu nome completo" />

                    <Grid2>
                        <div>
                            <Label>CPF</Label>
                        </div>
                    </Grid2>
                </Section>
            </div>
        </Container>
    )
}