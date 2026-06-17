import { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import {Container, Title, Section, SectionTitle,
  Input, Label, Button, Grid, FavoritoCard,
  PedidoCard, PedidoItem
} from './styles';

interface Perfil {
  nome: string;
  email: string;
  telefone: string;
  cep: string;
  rua: string;
  numero: string;
  bairro: string;
  cidade: string;
  estado: string;
  metodo_pagamento: string;  
}

interface Favorito {
  id: number;
  produto_nome: string;
  produto_preco: number;
  produto_imagem: string;
}

interface Pedido {
  id: number;
  total: number;
  status: string;
  created_at: string;
}

export default function Perfil () {
  const {token} = useAuth();
  const [ perfil,setPerfil] = useState<Perfil>({
    nome: '',
    email: '',
    telefone: '', 
  });

  const [favoritos, setFavoritos] = useState<Favorito[]>([]);
}