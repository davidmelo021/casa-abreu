import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
`;

export const Title = styled.h1`
  font-size: 1.8rem;
  color: #222;
  margin-bottom: 30px;
  text-align: center;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

export const CategoryTitle = styled.h2`
  color: #ff6600;
  margin-bottom: 16px;
`;

export const Divider = styled.hr`
  margin: 40px 0;
  border-color: #eee;
`;