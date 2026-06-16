import { useCart } from "../../context/CartContext";
import {useAuth} from '../../context/AuthContext';
import {useNavigate} from 'react-router-dom';
import { Container , Overlay} from "./styles";

interface Props {
    open: boolean;
    toggleCart: () => void;
}

export default function CartSidebar({ open, toggleCart }: Props) {
    const { cart, removeFromCart, cartTotal, clearCart } = useCart();
    const { token, isLogado } = useAuth();
    const navigate = useNavigate();

    async function finalizarCompra() {
        if (!isLogado) {
            alert('Você precisa estar logado para finalizar a compra!');
            navigate('/login');
            return;
        }

        try {
            const itens = cart.map(item => ({
                nome: item.name,
                preco: item.price,
                quantidade: item.quantity,
            }));

            const response = await fetch('http://localhost:3001/pedidos', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify({ itens }),
            });

            if (!response.ok) throw new Error('Erro ao finalizar compra');

            alert('Compra finalizada com sucesso! 🎉');
            clearCart();
            toggleCart();
        } catch (err) {
            alert('Erro ao finalizar compra. Tente novamente.');
        }
    }

    return (
        <>
            <Overlay open={open} onClick={toggleCart} />
            <Container open={open}>
                <h2>Carrinho</h2>
                {cart.length === 0 && <p>Seu carrinho está vazio</p>}
                {cart.map(item => (
                    <div key={item.id}>
                        <p>{item.name}</p>
                        <p>Qtd: {item.quantity}</p>
                        <p>R$ {(item.price * item.quantity).toFixed(2)}</p>
                        <button onClick={() => removeFromCart(item.id)}>Remover</button>
                    </div>
                ))}

                {cart.length > 0 && (
                    <>
                        <h3>Total: R$ {cartTotal.toFixed(2)}</h3>
                        <button onClick={finalizarCompra}>Finalizar Compra</button>
                    </>
                )}
            </Container>
        </>
    );
}