import styled from 'styled-components';

export const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 30px 20px;
`;

export const Title = styled.h1`
  font-size: 2rem;
  color: var(--text);
  margin-bottom: 30px;
`;

export const Section = styled.div`
  background: var(--bg-card);
  border-radius: 10px;
  box-shadow: 0 2px 8px var(--shadow);
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
  color: var(--text-secondary);
  margin-bottom: 4px;
  margin-top: 12px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid var(--border);
  border-radius: 6px;
  font-size: 1rem;
  box-sizing: border-box;
  background: var(--input-bg);
  color: var(--text);

  &:disabled {
    background: var(--border);
    color: var(--text-secondary);
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
  background: var(--bg-card);
  border-radius: 8px;
  padding: 12px;
  text-align: center;
  box-shadow: 0 1px 4px var(--shadow);

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
  background: var(--bg-card);
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 12px;
  box-shadow: 0 1px 4px var(--shadow);
`;

export const PedidoItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 4px;
  font-size: 0.95rem;
  color: var(--text);
`;