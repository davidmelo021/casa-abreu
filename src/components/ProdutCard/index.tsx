import { Card, CardImage, CardTitle, CardPrice ,Badge, CardWrapper} from './styles';
import { useCart } from '../../context/CartContext';

interface ProductCardProps {
  id: number;
  image: string;
  title: string;
  price: string;
}

export function ProductCard({ id, image, title, price }: ProductCardProps) {
  const {addToCart, cart} = useCart();
  const numericPrice = Number (
    price.replace("R$","").replace(/\./g, "").replace(",",".").trim()
  );

  const itemNoCarrinho = cart.find(item => item.id === id);
  const quantidade = itemNoCarrinho ? itemNoCarrinho.quantity : 0

  function handleAdd(){
    addToCart({
      id,
      name: title,
      price: numericPrice,
      quantity: 1,
      image: image,
    });
  }

  return (
  <CardWrapper>
    {quantidade > 0 && <Badge>{quantidade}</Badge>}
    <Card>
      <CardImage src={image} alt={title} />
      <CardTitle>{title}</CardTitle>
      <CardPrice>{price}</CardPrice>

      <button onClick={handleAdd}>
        Adicionar ao carrinho
      </button>
    </Card>
  </CardWrapper>
  );
}
