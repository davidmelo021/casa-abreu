import styled from 'styled-components';

export const Container = styled.div`
  max-width: 600px;
  margin: 40px auto;
  padding: 20px;
`;

export const Card = styled.div`
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.08);
  padding: 32px;
  text-align: center;
`;

export const Icone = styled.div`
  font-size: 4rem;
  margin-bottom: 16px;
`;

export const Title = styled.h1`
  color: #222;
  font-size: 1.8rem;
  margin-bottom: 8px;
`;

export const Subtitle = styled.p`
  color: #666;
  margin-bottom: 32px;
`;


export const PedidoInfo = styled.div`
  background: #f9f9f9;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 24px;
  text-align: left;
`;

export const PedidoNumero = styled.p`
  font-size: 0.95rem;
  color: #555;
  margin-bottom: 16px;

  span {
    font-weight: 700;
    color: #ff6600;
  }
`;

export const ItemRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #eee;
  font-size: 0.95rem;

  &:last-child {
    border-bottom: none;
  }
`;

export const ItemNome = styled.span`
  color: #333;
  flex: 1;
`;

export const ItemQty = styled.span`
  color: #888;
  margin: 0 16px;
  font-size: 0.85rem;
`;

export const ItemPreco = styled.span`
  color: #ff6600;
  font-weight: 600;
`;

export const TotalRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;
  padding-top: 16px;
  border-top: 2px solid #eee;
  font-size: 1.1rem;
  font-weight: 700;
`;

export const BotoesRow = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 24px;
`;

export const Button = styled.button<{ secondary?: boolean }>`
  flex: 1;
  padding: 12px;
  border-radius: 8px;
  border: none;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  background: ${({ secondary }) => secondary ? '#f0f0f0' : '#ff6600'};
  color: ${({ secondary }) => secondary ? '#333' : '#fff'};

  &:hover {
    background: ${({ secondary }) => secondary ? '#e0e0e0' : '#e05500'};
  }
`;