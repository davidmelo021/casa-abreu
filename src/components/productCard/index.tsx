import { Card, CardImage, CardTitle, CardPrice } from './styles';

interface ProductCardProps {
  image: string;
  title: string;
  price: string;
}

export function ProductCard({ image, title, price }: ProductCardProps) {
  return (
    <Card>
      <CardImage src={image} alt={title} />
      <CardTitle>{title}</CardTitle>
      <CardPrice>{price}</CardPrice>
    </Card>
  );
}
