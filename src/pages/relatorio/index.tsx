import { useEffect, useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import {
  Container, Title, CardsRow, InfoCard, Section,
  SectionTitle, Table, Rank, BarRow, BarLabel,
  BarBg, BarFill, Loading
} from './styles';

export default function Relatorio() {
  const { token, isLogado } = useAuth();
  const navigate = useNavigate();
  const [dados, setDados] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isLogado) {
      navigate('/login');
      return;
    }

    async function carregar() {
      try {
        const res = await fetch('http://localhost:3001/relatorio', {
          headers: { Authorization: `Bearer ${token}` },
        });
        const data = await res.json();
        setDados(data);
      } catch {
        console.error('Erro ao carregar relatório');
      } finally {
        setLoading(false);
      }
    }

    carregar();
  }, [token, isLogado]);

  if (loading) return <Loading>Carregando relatório...</Loading>;
  if (!dados) return <Loading>Erro ao carregar dados.</Loading>;

  const maxVendido = dados.maisVendidos[0]?.total_vendido || 1;

  return (
    <Container>
      <Title>📊 Relatório de Vendas</Title>

      <CardsRow>
        <InfoCard>
          <h3>Total de Pedidos</h3>
          <p>{dados.totalVendas.total_pedidos}</p>
        </InfoCard>
        <InfoCard>
          <h3>Total Faturado</h3>
          <p>R$ {Number(dados.totalVendas.total_vendido || 0).toFixed(2)}</p>
        </InfoCard>
        <InfoCard>
          <h3>Ticket Médio</h3>
          <p>
            R$ {dados.totalVendas.total_pedidos > 0
              ? (Number(dados.totalVendas.total_vendido) / Number(dados.totalVendas.total_pedidos)).toFixed(2)
              : '0,00'}
          </p>
        </InfoCard>
      </CardsRow>

      <Section>
        <SectionTitle>🏆 Produtos Mais Vendidos</SectionTitle>
        {dados.maisVendidos.length === 0 ? (
          <p style={{ color: '#888' }}>Nenhuma venda registrada ainda.</p>
        ) : (
          <>
            <Table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Produto</th>
                  <th>Qtd Vendida</th>
                  <th>Total Faturado</th>
                </tr>
              </thead>
              <tbody>
                {dados.maisVendidos.map((item: any, i: number) => (
                  <tr key={item.produto_nome}>
                    <td><Rank>{i + 1}</Rank></td>
                    <td>{item.produto_nome}</td>
                    <td>{item.total_vendido} un.</td>
                    <td style={{ color: '#ff6600', fontWeight: 700 }}>
                      R$ {Number(item.total_faturado).toFixed(2)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>

            <div style={{ marginTop: '24px' }}>
              {dados.maisVendidos.map((item: any) => (
                <BarRow key={item.produto_nome}>
                  <BarLabel>
                    <span>{item.produto_nome}</span>
                    <span>{item.total_vendido} un.</span>
                  </BarLabel>
                  <BarBg>
                    <BarFill width={(item.total_vendido / maxVendido) * 100} />
                  </BarBg>
                </BarRow>
              ))}
            </div>
          </>
        )}
      </Section>

      <Section>
        <SectionTitle>📅 Vendas dos Últimos 7 Dias</SectionTitle>
        {dados.vendasPorDia.length === 0 ? (
          <p style={{ color: '#888' }}>Nenhuma venda nos últimos 7 dias.</p>
        ) : (
          <Table>
            <thead>
              <tr>
                <th>Data</th>
                <th>Pedidos</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {dados.vendasPorDia.map((dia: any) => (
                <tr key={dia.data}>
                  <td>{new Date(dia.data).toLocaleDateString('pt-BR')}</td>
                  <td>{dia.total_pedidos}</td>
                  <td style={{ color: '#ff6600', fontWeight: 700 }}>
                    R$ {Number(dia.total_vendido).toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </Section>
    </Container>
  );
}