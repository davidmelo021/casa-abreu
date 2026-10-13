import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {useCart} from '../../context/CartContext';
import {useAuth} from '../../context/AuthContext';
import {Container, Title, Section,SectionTitle,Label,
    Input,Grid2,PaymentsTabs,PaymentTab,CardBrands,CardBrand,PixBox,BoletoBox,ResumeContainer,
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
                            <Input value={cpf} onChange={(e) => setCpf(e.target.value)} placeholder="000.000.000-00" maxLength={14} />
                        </div>

                        <div>
                            <Label>Email</Label>
                            <Input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="seu@email.com" type="email"/>
                        </div>
                    </Grid2>
                </Section>

                <Section>
                    <SectionTitle>Endereço de Entrega</SectionTitle>
                    <Label>Endereço</Label>
                    
                    <Label>CEP *</Label>
                    <Input value={cep} onChange={e => setCep(e.target.value)} placeholder="00000-000" maxLength={9} />
                    <Input value={endereco} onChange={(e) => setEndereco(e.target.value)} placeholder="Nome da rua" />
                    
                    <Grid2>
                        <div>
                            <Label>Número</Label>
                            <Input value={numero} onChange={(e) => setNumero(e.target.value)} placeholder="N°" />
                        </div>
                        <div>
                            <Label>Bairro</Label>
                            <Input value={bairro} onChange={(e) => setBairro(e.target.value)} placeholder="Bairro" />
                        </div>
                    </Grid2>
                    <Grid2>
                        <div>
                            <Label>Cidade</Label>
                            <Input value={cidade} onChange={(e) => setCidade(e.target.value)} placeholder="Cidade" />
                        </div>
                        <div>
                            <Label>Estado</Label>
                            <Input value={estado} onChange={(e) => setEstado(e.target.value)} placeholder="UF" maxLength={2} />
                        </div>
                    </Grid2>
                </Section>

                <Section>
                    <SectionTitle>Forma de Pagamento</SectionTitle>
                    <PaymentsTabs>
                        <PaymentTab active={pagamento === 'credito'} onClick={() => setPagamento('credito')}>
                          💳 Crédito
                        </PaymentTab>

                         <PaymentTab active={pagamento === 'debito'} onClick={() => setPagamento('debito')}>
                          💳 Débito
                        </PaymentTab>

                         <PaymentTab active={pagamento === 'boleto'} onClick={() => setPagamento('boleto')}>
                          � Boleto
                        </PaymentTab>

                         <PaymentTab active={pagamento === 'pix'} onClick={() => setPagamento('pix')}>
                            📱 Pix
                        </PaymentTab>
                    </PaymentsTabs>

                    {(pagamento === 'credito' || pagamento === 'debito') && (
                        <>
                            <Label>Bandeira</Label>
                            <CardBrands>
                                {['visa','mastercard','elo','hipercard'].map(b => (
                                    <CardBrand key={b} selected={bandeira === b} onClick={() => setBandeira(b)}>
                                        {b === 'visa' && 'Visa'}
                                        {b === 'mastercard' && 'Mastercard'}
                                        {b === 'elo' && 'Elo'}
                                        {b === 'hipercard' && 'HiperCard'}
                                    </CardBrand>
                                ))}
                            </CardBrands>

                            <Label>Número do Cartão</Label>
                            <Input value={numeroCartao} onChange={(e) => setNumeroCartao(e.target.value)} placeholder="0000 0000 0000 0000" maxLength={19} />

                            <Label>Nome no Cartão</Label>
                            <Input value={nameCartao} onChange={(e) => setNameCartao(e.target.value)} placeholder="Nome como no cartão" />

                            <Grid2>
                                
                            </Grid2>
                        </>
                    )}
                </Section>
            </div>
        </Container>
    )
}