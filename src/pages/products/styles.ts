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

export const PageLayout = styled.div`
  display: flex;
  gap: 24px;
  align-items: flex-start;
`;

export const FilterSidebar = styled.div`
  width: 220px;
  flex-shrink: 0;
  background: #fff;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  position: sticky;
  top: 90px;

  h3 {
    font-size: 1rem;
    color: #222;
    margin-bottom: 16px;
    padding-bottom: 8px;
    border-bottom: 2px solid #ff660020;
  }
`;

export const FilterOption = styled.button<{ active: boolean }>`
  width: 100%;
  text-align: left;
  padding: 10px 12px;
  border: none;
  border-radius: 8px;
  background: ${({ active }) => active ? '#ff6600' : '#f5f5f5'};
  color: ${({ active }) => active ? '#fff' : '#333'};
  font-size: 0.9rem;
  cursor: pointer;
  margin-bottom: 8px;
  transition: all 0.2s;

  &:hover {
    background: ${({ active }) => active ? '#e05500' : '#eee'};
  }
`;

export const ProductsArea = styled.div`
  flex: 1;
  min-width: 0;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
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