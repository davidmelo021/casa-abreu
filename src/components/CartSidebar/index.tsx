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

    const totalFinal = totalCalculado * (1 - desconto / 100);

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
        const total = totalFinal;
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

                                            <button
                                                onClick={aplicarCupom}
                                                style = {{
                                                    background: '#ff6600',
                                                    color: '#fff',
                                                    border: 'none',
                                                    borderRadius: '8px',
                                                    padding: '10px 14px',
                                                    cursor: 'pointer',
                                                    fontWeight: '600',
                                                    fontSize: '0.9rem',
                                                }}
                                            >
                                                Aplicar
                                            </button>
                                        </div>

                                        {erroCupom &&(
                                            <p style={{ color: 'red', fontSize: '0.8rem',margin: 0  }}>{erroCupom}</p>
                                            )}
                                    </>
                                ):(
                                    <div style = {{
                                        background: '#f0fdf4',
                                        border: '1px solid #86efac',
                                        borderRadius: '8px',
                                        padding: '10px 14px',
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                    }}>
                                        <span style={{ color: '#16a34a', fontWeight: '600', fontSize: '0.9rem' }}>
                                            ✅ {cupomAplicado} — {desconto}% OFF
                                        </span>

                                        <button
                                            onClick= {() => {setDesconto(0); setCupomAplicado('');}}
                                            style = {{background:'none', border: 'none', color: '#999', cursor: 'pointer', fontSize: '1rem'}}
                                        >
                                            ✕
                                        </button>
                                    </div>
                                )}
                            </div>

                            <TotalRow>
                                <span>Total:</span>
                                <div>
                                    {desconto > 0 && (
                                        <div style={{textAlign: 'right'}}>
                                            <span style = {{fontSize: '0.85rem', color: '#999', textDecoration: 'line-through'}}>
                                                R$ {totalCalculado.toFixed(2)}
                                            </span>

                                            <span style={{fontSize: '0.75rem', color: '#16a34a', marginLeft: '6px'}}>
                                                -{desconto}%
                                            </span>
                                            
                                        </div>
                                    )}
                                    <span>R$ {totalFinal.toFixed(2)}</span>
                                    
                                </div>
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