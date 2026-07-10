import {useLocation,useNavigate} from 'react-router-dom';
import { Container, Card, Icone, Title, Subtitle, PedidoInfo, PedidoNumero, ItemRow, ItemNome, ItemQty, ItemPreco, TotalRow, BotoesRow } from './styles';



export default function Confirmacao() {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state || !state.pedido) {
    navigate('/');
    return null;
  }
  const {pedido.Id, itens, total} = state;

  return (
    <Container>
      <Card>
        <Icone>✅</Icone>
        <Title>Pedido Confirmado!</Title>
        <Subtitle>Obrigado por sua compra. Seu pedido foi processado com sucesso.</Subtitle>

        <PedidoInfo>
          <PedidoNumero>
            Pedido: <span>#{pedido.Id}</span>
          </PedidoNumero>

          {itens.map ((item:any) =>(
            <ItemRow key={item.id}>
              <ItemNome>{item.nome}</ItemNome>
              <ItemQty>{item.quantidade}</ItemQty>
              <ItemPreco>R$ {item.preco.toFixed(2)}</ItemPreco>
            </ItemRow>
          ))}

          <TotalRow>
            <span>Total</span>
            <span style = {{color: '#ff6600' }}>R$ {total.toFixed(2)}</span>
          </TotalRow>
        </PedidoInfo>

          <BotoesRow>
            
          </BotoesRow>
      </Card>
    </Container>
  )
}