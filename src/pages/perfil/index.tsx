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
  const [pedidos, setPedidos] = useState<Pedido[]>([]);
  const [salvo, setSalvo] = useState(false);

  useEffect (() => {
    async function carregar (){
      const headers = { Authorization: `Bearer ${token}` };
      const [pRes, fRes, pedRes] = await Promise.all ([
        fetch ('http://localhost:3000/clientes/perfil', { headers }),
        fetch ('http://localhost:3000/clientes/favoritos', { headers }),
        fetch ('http://localhost:3000/clientes/pedidos', { headers })
      ]);
      setPerfil(await pRes.json());
      setFavoritos(await fRes.json());
      setPedidos(await pedRes.json());
      
    }
    carregar();
  },[token]);

  async function salvarPerfil (){
    await fetch('http://localhost:3001/clientes/perfil', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(perfil),
    });
    setSalvo(true);
    setTimeout(() => setSalvo(false), 3000);
 }  

 async function removerFavorito(id:number) {
  await fetch(`http://localhost:3001/clientes/favoritos/${id}`,{
    method:'DELETE',
    headers:{Authorization:`Bearer ${token}`},
  });
  setFavoritos(prev =>prev.filter(f =>f.id !==id));
 }

 return (
    <Container>
      <Title>Perfil</Title>

      <Section>
        <SectionTitle>Dados Pessoais</SectionTitle>
        <Label>Nome</Label>
        <Input value={perfil.nome} onChange={e =>setPerfil({...perfil,nome:e.target.value})}></Input>

        <Label>Email</Label>
        <Input value={perfil.email} disabled></Input>

        <Label>Telefone</Label>
        <Input value={perfil.telefone} onChange={e =>setPerfil({...perfil,telefone:e.target.value})} placeholder="(00)00000-0000"></Input>
      </Section>
    </Container>
 )

}