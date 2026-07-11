import { useLocation, useNavigate } from 'react-router-dom';
import { Container, Card, Icone, Title, Subtitle, PedidoInfo, PedidoNumero, ItemRow, ItemNome, ItemQty, ItemPreco, TotalRow, BotoesRow, Button } from './styles';

export default function Confirmacao() {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) {
    navigate('/');
    return null;
  }

  const { pedidoId, itens, total } = state;

  return (
    <Container>
      <Card>
        <Icone>✅</Icone>
        <Title>Pedido Confirmado!</Title>
        <Subtitle>Obrigado por sua compra. Seu pedido foi processado com sucesso.</Subtitle>

        <PedidoInfo>
          <PedidoNumero>
            Pedido: <span>#{pedidoId}</span>
          </PedidoNumero>

          {itens.map((item: any) => (
            <ItemRow key={item.id}>
              <ItemNome>{item.name}</ItemNome>
              <ItemQty>x{item.quantity}</ItemQty>
              <ItemPreco>R$ {(item.price * item.quantity).toFixed(2)}</ItemPreco>
            </ItemRow>
          ))}

          <TotalRow>
            <span>Total</span>
            <span style={{ color: '#ff6600' }}>R$ {total.toFixed(2)}</span>
          </TotalRow>
        </PedidoInfo>

        <BotoesRow>
          <Button secondary onClick={() => navigate('/perfil')}>
            Ver Pedidos
          </Button>
          <Button onClick={() => navigate('/')}>
            Continuar Comprando
          </Button>
        </BotoesRow>
      </Card>
    </Container>
  );
}