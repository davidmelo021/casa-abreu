import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {useCart} from '../../context/CartContext';
import {useAuth} from '../../context/AuthContext';
import {} from './styles';

type Pagamento = 'credito' | 'debito' | 'pix'| 'boleto';

export default function Checkout() {
    
}