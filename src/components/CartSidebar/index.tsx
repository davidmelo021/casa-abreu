import { useRef, useState } from 'react';
import { useCart } from "../../context/CartContext";
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import {
    Container, Overlay, CartHeader, CloseButton, EmptyState,
    ItemsList, ItemCard, ItemImage, ItemInfo, QtyRow,
    ItemPrice, RemoveButton, Footer, TotalRow, CheckoutButton,
    QtyButton
} from "./styles";

interface Props {
    open: boolean;
    toggleCart: () => void;
}

export default function CartSidebar({ open, toggleCart }: Props) {
    const cartRef = useRef<any[]>([]);
    const { cart, removeFromCart, updateQuantity, clearCart, cartCount } = useCart();
    const { token, isLogado } = useAuth();
    const navigate = useNavigate();

    const [cupom, setCupom] = useState('');
    const [desconto, setDesconto] = useState(0);
    const [erroCupom, setErroCupom] = useState('');
    const [cupomAplicado, setCupomAplicado] = useState('');


    cartRef.current = cart;

    const totalCalculado = cartRef.current.reduce(
        (acc, item) => acc + item.price * item.quantity, 0
    );

    async function aplicarCupom() {
        setErroCupom('');
        try {
            const response = await fetch('http://localhost:3001/cupom/validar', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({ codigo: cupom }),
            });

            const data = await response.json();

            if(!response.ok) {
                setErroCupom(data.message);
                return;
            }

            setDesconto(data.desconto);
            setCupomAplicado(data.codigo);
        } catch {
            setErroCupom('Erro ao validar cupom. Tente novamente.');
        }
    }



  async function finalizarCompra() {
    if (!isLogado) {
        alert('Você precisa estar logado para finalizar a compra!');
        navigate('/login');
        return;
    }

    try {
        const itens = cartRef.current.map(item => ({
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

        const data = await response.json();
        const total = totalCalculado;
        const itensSalvos = [...cartRef.current];

        clearCart();
        toggleCart();
        navigate('/confirmacao', {
            state: {
                pedidoId: data.pedidoId,
                itens: itensSalvos,
                total,
            }
        });
    } catch (err) {
        alert('Erro ao finalizar compra. Tente novamente.');
    }
}

    return (
        <>
            <Overlay open={open} onClick={toggleCart} />
            <Container open={open} key={cartCount}>
                <CartHeader>
                    <h2>Carrinho {cartCount > 0 && <span>{cartCount}</span>}</h2>
                    <CloseButton onClick={toggleCart}>✕</CloseButton>
                </CartHeader>

                {cart.length === 0 ? (
                    <EmptyState>
                        <div style={{ fontSize: '3rem' }}>🛒</div>
                        <p>Seu carrinho está vazio</p>
                    </EmptyState>
                ) : (
                    <>
                        <ItemsList>
                            {cartRef.current.map(item => (
                                <ItemCard key={item.id}>
                                    <ItemImage>
                                        <img src={item.image} alt={item.name} />
                                    </ItemImage>
                                    <ItemInfo>
                                        <p>{item.name}</p>
                                        <QtyRow>
                                             <QtyButton onClick={() => updateQuantity(item.id, item.quantity - 1)}>−</QtyButton>
                                            <span style={{ fontSize: '0.85rem', color: '#777' }}>
                                                Qtd: {item.quantity}
                                            </span>
                                            <QtyButton onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</QtyButton>
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
                            <div style={{ marginBottom: '16px' }}>
                                {!cupomAplicado ? (
                                    <>
                                        <div style={{ display: 'flex', gap: '8px', marginBottom: '8px' }}>
                                            <input
                                                type="text"
                                                placeholder="Digite o cupom"
                                                value={cupom}
                                                onChange={(e) => setCupom(e.target.value.toUpperCase())}
                                                style = {{
                                                    flex: 1,
                                                    padding: '10px',
                                                    border: '1px solid var(--border-color)',
                                                    borderRadius: '8px',
                                                    background: 'var(--input-bg)',
                                                    color: 'var(--text)',
                                                    fontSize: '0.9rem',
                                                }}
                                            />
                                        </div>
                                    </>
                                )}
                            </div>
                        </Footer>
                    </>
                )}
            </Container>
        </>
    );
}