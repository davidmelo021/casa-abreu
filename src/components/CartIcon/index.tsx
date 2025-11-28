import { useCart } from "../../context/CartContext";
import { IconContainer, Badge } from "./styles";
import cartImg from '../../assets/png-transparent-shopping-cart-icon-shopping-cart-black-design-trade.png';

interface Props {
    toggleCart: () => void;
}

export default function CartIcon({toggleCart}: Props) {
    const {cartCount} = useCart();

    return (
        <IconContainer onClick={toggleCart}>
            <img src={cartImg} alt="Carrinho"/>
            {cartCount > 0 && <Badge>{cartCount}</Badge>}
        </IconContainer>
    );
}