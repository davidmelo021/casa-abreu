import { useCart } from "../../context/CartContext";
import { Container , Overlay} from "./styles";

interface Props {
    open: boolean;
    toggleCart: () => void;
}

export default function CartSidebar({open, toggleCart}: Props) {
    const {cart,removeFromCart,cartTotal} = useCart();

    return (
        <>
            <Overlay open={open} onClick={toggleCart}/>
            <Container open={open}>
                <h2>Carrinho</h2>
                {cart.length === 0 && <p>Seu carrinho esta vazio</p> }
                {cart.map(item =>(
                    <div key={item.id}>
                        <p>{item.name}</p>
                        <p>Qtd: {item.quantity}</p>
                        <button onClick={() => removeFromCart(item.id)}>Remover</button>
                    </div>
                ))}

                <h3>Total: {cartTotal.toFixed(2)}</h3>
            </Container>
        </>
    );
}