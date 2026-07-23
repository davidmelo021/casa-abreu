import styled from 'styled-components';

export const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 30px 20px;
`;

export const Title = styled.h1`
  font-size: 2rem;
  color: #222;
  margin-bottom: 30px;
`;

export const CardsRow = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-bottom: 30px;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const InfoCard = styled.div`
  background: #fff;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  text-align: center;

  h3 {
    font-size: 0.9rem;
    color: #888;
    margin-bottom: 8px;
    text-transform: uppercase;
  }

  p {
    font-size: 1.8rem;
    font-weight: 700;
    color: #ff6600;
    margin: 0;
  }
`;

export const Section = styled.div`
  background: #fff;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  margin-bottom: 24px;
`;

export const SectionTitle = styled.h2`
  font-size: 1.2rem;
  color: #ff6600;
  margin-bottom: 16px;
  padding-bottom: 8px;
  border-bottom: 2px solid #ff660020;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  th {
    text-align: left;
    padding: 10px;
    font-size: 0.85rem;
    color: #888;
    border-bottom: 1px solid #eee;
  }

  td {
    padding: 12px 10px;
    font-size: 0.95rem;
    color: #333;
    border-bottom: 1px solid #f5f5f5;
  }

  tr:last-child td {
    border-bottom: none;
  }
`;

export const Rank = styled.span`
  background: #ff6600;
  color: #fff;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  font-weight: 700;
`;

export const BarRow = styled.div`
  margin-bottom: 12px;
`;

export const BarLabel = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.85rem;
  color: #555;
  margin-bottom: 4px;
`;

export const BarBg = styled.div`
  background: #f3f3f3;
  border-radius: 6px;
  height: 10px;
  width: 100%;
`;

export const BarFill = styled.div<{ width: number }>`
  background: #ff6600;
  border-radius: 6px;
  height: 10px;
  width: ${({ width }) => width}%;
  transition: width 0.5s ease;
`;

export const Loading = styled.p`
  text-align: center;
  color: #888;
  margin-top: 40px;
`;