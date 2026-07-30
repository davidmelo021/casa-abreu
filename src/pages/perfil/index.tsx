import { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useTheme } from '../../context/ThemeContext';
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

export default function Perfil() {
  const { token } = useAuth();
  const { darkMode, toggleDarkMode } = useTheme();
  const [perfil, setPerfil] = useState<Perfil>({
    nome: '', email: '', telefone: '', cep: '',
    rua: '', numero: '', bairro: '', cidade: '',
    estado: '', metodo_pagamento: '',
  });
  const [favoritos, setFavoritos] = useState<Favorito[]>([]);
  const [pedidos, setPedidos] = useState<Pedido[]>([]);
  const [salvo, setSalvo] = useState(false);

  useEffect(() => {
    async function carregar() {
      const headers = { Authorization: `Bearer ${token}` };
      const [pRes, fRes, pedRes] = await Promise.all([
        fetch('http://localhost:3001/clientes/perfil', { headers }),
        fetch('http://localhost:3001/clientes/favoritos', { headers }),
        fetch('http://localhost:3001/pedidos', { headers }),
      ]);
      setPerfil(await pRes.json());
      setFavoritos(await fRes.json());
      setPedidos(await pedRes.json());
    }
    carregar();
  }, [token]);

  async function salvarPerfil() {
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

  async function removerFavorito(id: number) {
    await fetch(`http://localhost:3001/clientes/favoritos/${id}`, {
      method: 'DELETE',
      headers: { Authorization: `Bearer ${token}` },
    });
    setFavoritos(prev => prev.filter(f => f.id !== id));
  }

  return (
    <Container>
      <Title>Perfil</Title>

      <Section>
        <SectionTitle>Dados Pessoais</SectionTitle>
        <Label>Nome</Label>
        <Input value={perfil.nome} onChange={e => setPerfil({ ...perfil, nome: e.target.value })} />
        <Label>Email</Label>
        <Input value={perfil.email} disabled />
        <Label>Telefone</Label>
        <Input value={perfil.telefone || ''} onChange={e => setPerfil({ ...perfil, telefone: e.target.value })} placeholder="(00)00000-0000" />
      </Section>

      <Section>
        <SectionTitle>Endereço de entrega</SectionTitle>
        <Label>CEP</Label>
        <Input value={perfil.cep || ''} onChange={e => setPerfil({ ...perfil, cep: e.target.value })} placeholder="00000-000" />
        <Grid>
          <div>
            <Label>Rua</Label>
            <Input value={perfil.rua || ''} onChange={e => setPerfil({ ...perfil, rua: e.target.value })} placeholder="Nome da rua" />
          </div>
          <div>
            <Label>Número</Label>
            <Input value={perfil.numero || ''} onChange={e => setPerfil({ ...perfil, numero: e.target.value })} placeholder="Nº" />
          </div>
        </Grid>
        <Label>Bairro</Label>
        <Input value={perfil.bairro || ''} onChange={e => setPerfil({ ...perfil, bairro: e.target.value })} placeholder="Bairro" />
        <Grid>
          <div>
            <Label>Cidade</Label>
            <Input value={perfil.cidade || ''} onChange={e => setPerfil({ ...perfil, cidade: e.target.value })} placeholder="Cidade" />
          </div>
          <div>
            <Label>Estado</Label>
            <Input value={perfil.estado || ''} onChange={e => setPerfil({ ...perfil, estado: e.target.value })} placeholder="UF" maxLength={2} />
          </div>
        </Grid>
      </Section>

      <Section>
        <SectionTitle>Método de pagamento</SectionTitle>
        <Label>Preferência</Label>
        <select
          value={perfil.metodo_pagamento || ''}
          onChange={e => setPerfil({ ...perfil, metodo_pagamento: e.target.value })}
          style={{ padding: '10px', borderRadius: '6px', border: '1px solid #ddd', width: '100%' }}
        >
          <option value="">Selecione...</option>
          <option value="cartao_credito">Cartão de Crédito</option>
          <option value="cartao_debito">Cartão de Débito</option>
          <option value="pix">PIX</option>
          <option value="boleto">Boleto</option>
        </select>
      </Section>

      <Section>
        <SectionTitle>Preferências</SectionTitle>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Label style={{ marginTop: 0 }}>🌙 Modo Escuro</Label>
          <button
            onClick={toggleDarkMode}
            style={{
              background: darkMode ? '#ff6600' : '#ddd',
              border: 'none',
              borderRadius: '20px',
              width: '50px',
              height: '26px',
              cursor: 'pointer',
              position: 'relative',
              transition: 'background 0.3s',
            }}
          >
            <span style={{
              position: 'absolute',
              top: '3px',
              left: darkMode ? '26px' : '3px',
              width: '20px',
              height: '20px',
              background: '#fff',
              borderRadius: '50%',
              transition: 'left 0.3s',
            }} />
          </button>
        </div>
      </Section>

      <Button onClick={salvarPerfil}>
        {salvo ? '✅ Salvo com sucesso!' : 'Salvar Alterações'}
      </Button>

      <Section>
        <SectionTitle>Produtos Favoritos</SectionTitle>
        {favoritos.length === 0 && <p>Nenhum produto favorito adicionado.</p>}
        <Grid>
          {favoritos.map(f => (
            <FavoritoCard key={f.id}>
              <img src={f.produto_imagem} alt={f.produto_nome} />
              <p>{f.produto_nome}</p>
              <p>R$ {f.produto_preco.toFixed(2)}</p>
              <button onClick={() => removerFavorito(f.id)}>Remover</button>
            </FavoritoCard>
          ))}
        </Grid>
      </Section>

      <Section>
        <SectionTitle>Histórico de Pedidos</SectionTitle>
        {pedidos.length === 0 && <p>Nenhum pedido realizado.</p>}
        {pedidos.map(p => (
          <PedidoCard key={p.id}>
            <PedidoItem>
              <span>Pedido #{p.id}</span>
              <span style={{ color: '#ff6600' }}>{p.status}</span>
            </PedidoItem>
          </PedidoCard>
        ))}
      </Section>
    </Container>
  );
}