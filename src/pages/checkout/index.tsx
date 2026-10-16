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
                            <Input value={numeroCartao} 
                                   onChange={(e) => setNumeroCartao(e.target.value)} 
                                   placeholder="0000 0000 0000 0000" maxLength={19} />

                            <Label>Nome no Cartão</Label>
                            <Input value={nameCartao} 
                                   onChange={(e) => setNameCartao(e.target.value)} 
                                   placeholder="Nome como no cartão" />

                            <Grid2>
                                <div>
                                    <Label>Validade</Label>
                                    <input 
                                        value={validadeCartao} 
                                        onChange={(e) => setValidadeCartao(e.target.value)} 
                                        placeholder="MM/AA" 
                                        maxLength={5}
                                    />
                                </div>

                                <div>
                                    <Label>CVV</Label>
                                    <Input value={cvvCartao} 
                                           onChange={(e) => setCvvCartao(e.target.value)} 
                                           placeholder="000" maxLength={4} />
                                </div>
                            </Grid2>

                            {pagamento === 'credito' && (
                                <>
                                    <Label>Parcelas</Label>
                                    <SelectInput value={parcelas} onChange={(e) => setParcelas(Number(e.target.value))}>
                                        {Array.from({length: 12},(_,i) => i + 1).map(n = >(
                                            <option key = {n} value = {n}>
                                                {n} x de R$ {(total/n).toFixed(2)} {n === 1 ? '(sem juros)' : n <= 6 ? '(sem juros)' : '(com juros)'}
                                            </option>
                                        ))}   
                                    </SelectInput>
                                </>
                            )}
                        </>
                    )}

                    {pagamento === 'pix' && (
                        <PixBox>
                            <div style = {{fontSize:'3rem'}}></div>
                            <h3 style = {{margin:'8px 0 4px'}}>Pagamento via PIX</h3>
                            <p>Abra o app do seu banco e escaneie o código QR para concluir o pagamento.</p>
                            <p>Aprovação imediata</p>
                        </PixBox>
                    )}

                    {pagamento === 'boleto' && (
                        <BoletoBox>
                            <div style = {{fontSize:'3rem'}}></div>
                            <h3 style = {{margin:'8px 0 4px'}}>Pagamento via Boleto</h3>
                            <p>Um boleto será gerado para você. Pague até a data de vencimento para concluir a compra.</p>
                            <p>Aprovação em até 3 dias úteis</p>
                        </BoletoBox>
                    )}
                </Section>
            </div>

            <ResumeContainer>
                <ResumeCard>
                    <ResumeTitle>Resumo do Pedido</ResumeTitle>

                    {cart.map(item => (
                        <ResumeItem key = {item.id}>
                            <img src={item.image} alt={item.name} />
                            <ResumeItemInfo>
                                <p>{item.name}</p>
                            </ResumeItemInfo>
                            <ResumeItemPrice>R$ {(item.price * item.quantity).toFixed(2)}</ResumeItemPrice>
                        </ResumeItem>
                    ))}

                    <ResumeTotal><ResumeTotal/>
                </ResumeCard>
            </ResumeContainer>
        </Container>
    )
}