import styled from 'styled-components';

export const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 30px 20px;
`;

export const Title = styled.h1`
  font-size: 2rem;
  color: #222;
  margin-bottom: 30px;
`;

export const Section = styled.div`
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  padding: 24px;
  margin-bottom: 24px;
`;

export const SectionTitle = styled.h2`
  font-size: 1.2rem;
  color: #ff6600;
  margin-bottom: 16px;
  padding-bottom: 8px;
  border-bottom: 2px solid #ff660020;
`;

export const Label = styled.label`
  display: block;
  font-size: 0.9rem;
  color: #555;
  margin-bottom: 4px;
  margin-top: 12px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 1rem;
  box-sizing: border-box;

  &:disabled {
    background: #f5f5f5;
    color: #999;
  }

  &:focus {
    outline: none;
    border-color: #ff6600;
  }
`;

export const Button = styled.button`
  background: #ff6600;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 12px 30px;
  font-size: 1rem;
  cursor: pointer;
  margin-bottom: 24px;
  width: 100%;

  &:hover {
    background: #e05500;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
`;

export const FavoritoCard = styled.div`
  background: #f9f9f9;
  border-radius: 8px;
  padding: 12px;
  text-align: center;

  img {
    width: 100%;
    height: 100px;
    object-fit: contain;
  }

  button {
    margin-top: 8px;
    padding: 6px 12px;
    background: #ff6600;
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-size: 0.85rem;
  }
`;

export const PedidoCard = styled.div`
  background: #f9f9f9;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 12px;
`;

export const PedidoItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 4px;
  font-size: 0.95rem;
  color: #333;
`;