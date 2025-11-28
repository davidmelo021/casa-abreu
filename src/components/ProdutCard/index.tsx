import { Card, CardImage, CardTitle, CardPrice } from './styles';
import { useCart } from '../../context/CartContext';

interface ProductCardProps {
  image: string;
  title: string;
  price: string;
}

export function ProductCard({ image, title, price }: ProductCardProps) {
  const {addToCart} = useCart();
  const numericPrice = Number (
    price.replace("R$","").replace(".","").replace(",",".").trim()
  );

  function handleAdd(){
    addToCart({
      id: Date.now(),
      name: title,
      price: numericPrice,
      quantity: 1
    });
  }

  return (
    <Card>
      <CardImage src={image} alt={title} />
      <CardTitle>{title}</CardTitle>
      <CardPrice>{price}</CardPrice>

      <button onClick={handleAdd}>
        Adicionar ao carrinho
      </button>
    </Card>
  );
}
