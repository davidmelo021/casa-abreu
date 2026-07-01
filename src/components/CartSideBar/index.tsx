import { useCart } from "../../context/CartContext";
import {useAuth} from '../../context/AuthContext';
import {useNavigate} from 'react-router-dom';
import { Container , Overlay,
Header,CloseButton,EmptyState,ItemsList,
ItemCard,ItemImage,ItemInfo,QtyRow,QtyButton,
ItemPrice,RemoveButton,Footer,TotalRow,CheckoutButton    
} from "./styles";

interface Props {
    open: boolean;
    toggleCart: () => void;
}

export default function CartSidebar({ open, toggleCart }: Props) {
    const { cart, removeFromCart, cartTotal, clearCart,cartCount } = useCart();
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
                <Header>
                    <h2>Carrinho {cartCount > 0 && <span>{cartCount}</span>}</h2>
                    <CloseButton onClick={toggleCart}>✕</CloseButton>
                </Header>

                {cart.length === 0 ? (
                    <EmptyState>
                        <div style={{ fontSize: '3rem' }}>🛒</div>
                        <p>Seu carrinho está vazio</p>
                    </EmptyState>
                ):(
                    <>
                        <ItemsList>
                            {cart.map(item =>(
                                <ItemCard key={item.id}>
                                    <ItemImage>
                                        <img src={item.image} alt={item.name} />
                                    </ItemImage>
                                    <ItemInfo>
                                        <p>{item.name}</p>
                                        <QtyRow>
                                            <span style = {{fontSize: '0.85rem', color: '#777'}}>
                                                Qtd: {item.quantity}
                                            </span>
                                        </QtyRow>
                                    </ItemInfo>
                                    <ItemPrice>
                                         R$ {(item.price * item.quantity).toFixed(2)}
                                    </ItemPrice>
                                    <RemoveButton onClick={() => removeFromCart(item.id)}>
                                         🗑
                                    </RemoveButton>
                                </ItemCard>
                            ))}
                        </ItemsList>
                        <Footer>
                            <TotalRow>
                                <span>Total</span>
                                <span>R$ {cartTotal.toFixed(2)}</span>
                            </TotalRow>
                            <CheckoutButton onClick={finalizarCompra}>
                                Finalizar Compra
                            </CheckoutButton>
                        </Footer>
                    </>
                )}
             </Container>
        </>
    );
}